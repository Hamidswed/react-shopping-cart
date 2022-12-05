import React from "react";
import CartList from "../components/cart/CartList";

export default function Cart({cartItems, removeFromCart, removeQtyCart, addToCart}) {
  return (
    <div>
      <CartList cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} removeQtyCart={removeQtyCart}/>
    </div>
  );
}
