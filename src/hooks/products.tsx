import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "../models";

export function useProductsData() {
  const [productData, setProductData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const addProduct = (product: IProduct) => {
    setProductData((prev) => [...prev, product]);
  };

  async function getData() {
    try {
      setLoading(true);
      const response = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products?limit=5"
      );
      setProductData(response.data);
      console.log(response);
      setLoading(false);
    } catch (err: unknown) {
      setLoading(false);
      const error = err as AxiosError;
      setError(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return { productData, loading, error, addProduct };
}
