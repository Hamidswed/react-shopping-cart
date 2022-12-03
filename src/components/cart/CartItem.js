import React from "react";
import "./CartItem.css";

export default function CartItem({ item, onDelete }) { 
  return (
    <div className="cart-item">
      <tr>
        <td className="cart-id">{item.id}</td>
        <td className="cart-title">{item.title.slice(0, 20)}</td>
        <td className="cart-img">
          <img src={item.image} alt={item.title} />
        </td>
        <td className="cart-qty">{item.qty}</td>
        <td className="cart-price">{item.price * item.qty}</td>
        <button type="button" className="cart-btn" onClick={()=>onDelete(item.id)}>
          Remove
        </button>
      </tr>
    </div>
  );
}
