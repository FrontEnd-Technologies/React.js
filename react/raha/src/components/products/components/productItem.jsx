import React from "react";
import "../style.css";
const ButtonComponent = () => {
  return (
    <>
      <button className="buttonStyle">click me</button>
    </>
  );
};

const ProductItem = ({ singleProduct }) => {
  return (
    <>
      <div style={{ padding: "20px", border: "2px solid white" }}>
        <p className="productTitle">{singleProduct}</p>
        <ButtonComponent />
      </div>
    </>
  );
};

export default ProductItem;
