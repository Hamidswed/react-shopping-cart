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
          <thead>
            <tr>
              <th className="id">ID</th>
              <th className="name">Name</th>
              <th className="img">Image</th>
              <th className="qty">Quantity</th>
              <th className="price">Price</th>
              <th className="rmv-btn">Remove</th>
            </tr>
          </thead>
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
      <div className="btn-price-div">
        {cartItems.length === 0 ? (
          <p>There is no product in the cart.</p>
        ) : (
          <div className="total-price">
            <span>Total price:</span>
            <span style={{ fontWeight: "bold", color: "orange" }}>
              $
              {cartItems
                .reduce((acc, curr) => acc + curr.totalPrice, 0)
                .toFixed(2)}
            </span>
            <button type="button">Payment</button>
          </div>
        )}
        <Link to="/" className="cart-backbtn">
          Back
        </Link>
      </div>
    </div>
  );
}
