import axios from "axios";
import { IProduct } from "../models";
import { useState } from "react";
import ErrorComponent from "./ErrorComponent";

const createProductData: IProduct = {
  title: "",
  description: "jfdskhglakdhgf",
  price: 10,
  image: "https://i.pravatar.cc",
};

interface createProductProps {
  onCreate: (product: IProduct) => void;
}

function CreateProduct({ onCreate }: createProductProps) {
  const [value, setValue] = useState("");
  const [err, setErr] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (value.trim().length === 0) {
      setErr("Please enter valid title");
      return;
    }

    createProductData.title = value;
    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      createProductData
    );
    onCreate(response.data);
  };

  const handleInputTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border py-2 px-4 mb-2 w-full outline-0"
          placeholder="Enter product title"
          value={value}
          onChange={handleInputTitle}
        />
        {err && <ErrorComponent error={err} />}
        <button type="submit" className="bg-yellow-400 border py-2 px-4">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateProduct;
