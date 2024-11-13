import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import ClassComponent from "./components/classComponent";
import FunctionalCmp from "./components/FunctionalCmp";
import ProductList from "./components/products";

const dummyProductData = ["Product1", "Product2", "Product3"];
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ClassComponent />
      <FunctionalCmp />
      <ProductList products={dummyProductData} />
    </>
  );
}

export default App;
