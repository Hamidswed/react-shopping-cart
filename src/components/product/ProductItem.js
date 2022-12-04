import React, { useContext } from "react";
import "./ProductItem.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../shared/context/cart-context";

export default function ProductItem({ item }) {
  const [cartItems, setCartItems] = useContext(CartContext);
  const addToCart = () => {
    const newdata = { ...item, qty: 1 };
    const index = cartItems.findIndex((object) => {
      return object.id === item.id;
    });
    const tempCartItems = [...cartItems];
    if (index < 0) {
      tempCartItems.push(newdata);
      setCartItems(tempCartItems);
    } else {
      tempCartItems[index].qty += 1;
      setCartItems(tempCartItems);
    }
  };

  return (
    <div className="product-item">
      <div>
        <h5>{item.title}</h5>
        <h4>${item.price}</h4>
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
        <button type="button" className="add-btn" onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
