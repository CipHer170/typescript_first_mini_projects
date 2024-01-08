import { Product } from "./components/product";
// import { productData } from "./components/productsData";
// import "././components/style.css";
import { useProductsData } from "./hooks/products";
import Loader from "./components/Loader";
import ErrorComponent from "./components/ErrorComponent";
import Modal from "./components/Modal";

function App() {
  const { productData, loading, error } = useProductsData();

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {{ error } && <ErrorComponent error={error} />}
      {productData.map((item, index) => (
        <Product tranferringData={item} key={index} />
      ))}
      <Modal />
    </div>
  );
}

export default App;
