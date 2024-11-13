import React from "react";
import ProductItem from "./components/productItem";
import "./style.css";
const ProductList = ({ products }) => {
  return (
    <>
      <div>
        <h2>productItem</h2>
        {products.map((product, index) => {
          return (
            <li key={index} className="title">
              <ProductItem singleProduct={product} />
            </li>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
