import React from "react";
import "./CartItem.css";

export default function CartItem({ item, onDelete, onAdd , onDeleteComplete}) {
  return (
    <div className="cart-item">
      <tr>
        <td className="cart-id">{item.id}</td>
        <td className="cart-title">{item.title.slice(0, 20)}</td>
        <td className="cart-img">
          <img src={item.image} alt={item.title} />
        </td>
        <td className="cart-qty">
          <button className="cart-qtybtn" onClick={() => onDelete(item.id)}>-</button>
          <span>{item.qty}</span>
          <button className="cart-qtybtn" onClick={() => onAdd(item.id)}>+</button>
        </td>
        <td className="cart-price">$ {item.price * item.qty}</td>
        <button
          type="button"
          className="cart-btn"
          onClick={() => onDeleteComplete(item.id)}
        >
          Remove
        </button>
      </tr>
    </div>
  );
}
