import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  tranferringData: IProduct;
}

export function Product(props: ProductProps) {
  // для удобства вместо props: ProductProps можно написать {tranferringData}:ProductProps, и в коде удалить все props..., просто оставив tranferringData.title

  const [show, setShow] = useState(false);

  return (
    <div className="product">
      <img src={props.tranferringData.image} alt="icon" />
      <p>{props.tranferringData.title}</p>
      <p className="font-bold">{props.tranferringData.price}</p>
      {show && <p>{props.tranferringData.description}</p>}
      <button className="btn" onClick={() => setShow((prev) => !prev)}>
        {show ? "hide" : "show"} details
      </button>
    </div>
  );
}
// 55:42
