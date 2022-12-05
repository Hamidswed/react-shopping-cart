import React from "react";
import "./ProductItem.css";
import { Link } from "react-router-dom";

export default function ProductItem({ item, addToCart, cartItems }) {
  
  return (
    <div className="product-item">
      <div>
        <h5>{item.title.slice(0, 20)}</h5>
        <h4>$ {item.price}</h4>
      </div>
      <div className="product-img">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="product-btn">
        <Link to={`/products/${item.id}`}>
          <button type="button" className="detail-btn">
            More detail
          </button>
        </Link>
        {/* {cartItems.length === 0 ? ( */}
          <button
            type="button"
            className="add-btn"
            onClick={() => addToCart(item)}
          >
            Add to cart
          </button>
         {/* ) : (
          <div className="product-counter">
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </div>
        )} */}
      </div>
    </div>
  );
}
