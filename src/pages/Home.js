import React from "react";
import ProductList from "../components/product/ProductList";

export default function Home({addToCart,cartItems}) {
  return (
    <div>
      <ProductList addToCart={addToCart} cartItems={cartItems}/>
    </div>
  );
}
