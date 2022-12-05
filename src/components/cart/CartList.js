import React from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import "./CartList.css";

export default function CartList({
  cartItems,
  removeFromCart,
  removeQtyCart,
  addToCart,
}) {
  return (
    <div>
      <div className="cart-list">
        <table>
          <tr>
            <th className="id">ID</th>
            <th className="name">Name</th>
            <th className="img">Image</th>
            <th className="qty">Quantity</th>
            <th className="price">Price</th>
            <th className="rmv-btn">Remove</th>
          </tr>
          {cartItems.map((item) => {
            return (
              <CartItem
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                removeQtyCart={removeQtyCart}
              />
            );
          })}
        </table>
      </div>
      <Link to="/" className="cart-backbtn">
        <button type="button">Back</button>
      </Link>
    </div>
  );
}
