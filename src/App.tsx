import { Product } from "./components/product";
// import { productData } from "./components/productsData";
import "././components/style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "./models";

function App() {
  const [productData, setProductData] = useState<IProduct[]>([]);
  async function getData() {
    const response = await axios.get<IProduct[]>(
      "https://fakestoreapi.com/products?limit=5"
    );
    setProductData(response.data);
    console.log(response);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {productData.map((item, index) => (
        <Product tranferringData={item} key={index} />
      ))}
    </div>
  );
}

export default App;
