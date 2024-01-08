import { Product } from "./components/product";
// import { productData } from "./components/productsData";
// import "././components/style.css";
import { useProductsData } from "./hooks/products";
import Loader from "./components/Loader";
import ErrorComponent from "./components/ErrorComponent";
import Modal from "./components/Modal";
import CreateProduct from "./components/CreateProduct";
import { useContext } from "react";
import { IProduct } from "./models";
import { ContextData } from "./context/contextData";

function App() {
  const { productData, loading, error, addProduct } = useProductsData();
  const { modal, open, close } = useContext(ContextData);

  const handleCreateProduct = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {{ error } && <ErrorComponent error={error} />}
      {/* mapping all products */}
      {productData.map((item, index) => (
        <Product tranferringData={item} key={index} />
      ))}

      {/* open modal */}
      {modal && (
        <Modal onClose={close} title="Enter new item">
          {/* как только onCreate сработает (корректно, т.e. новый элемент создасться) модальное окно закроется */}
          <CreateProduct onCreate={handleCreateProduct} />
        </Modal>
      )}

      {/* add element with modal */}
      <button
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl py-2 px-4"
        onClick={open}
      >
        +
      </button>
    </div>
  );
}

export default App;
