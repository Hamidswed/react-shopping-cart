import React, { useContext, useState, useEffect } from "react";
import "./ProductItem.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../shared/context/cart-context";

export default function ProductItem({ item }) {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [storeIndex, setStoreIndex] = useState(-1);
  
  useEffect(() => {
    const index = cartItems.findIndex((object) => {
      return object.id === item.id;
    });
    setStoreIndex(index);
  }, [cartItems, item.id]);

  const addToCart = () => {
    const index = cartItems.findIndex((object) => {
      return object.id === item.id;
    });
    setStoreIndex(index);
    const tempCartItems = [...cartItems];
    if (index < 0) {
      tempCartItems.push(item);
      setCartItems(tempCartItems);
    } else {
      tempCartItems[index].qty += 1;
      setCartItems(tempCartItems);
    }
  };

  const removeFromCart = (id) => {
    const index = cartItems.findIndex((object) => {
      return object.id === id;
    });
    
    if (cartItems[index].qty !== 1) {
      cartItems[index].qty -= 1;
      const newCartItem = [...cartItems];
      setCartItems(newCartItem);
    }else{
      setStoreIndex(-1)
      const newCartItem = cartItems.filter((obj)=>obj.id!==id)
      setCartItems(newCartItem)
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
        {storeIndex < 0 ? (
          <button type="button" className="add-btn" onClick={addToCart}>
            Add to cart
          </button>
        ) : (
          <div className="product-counter">
            <button onClick={()=>removeFromCart(item.id)}>-</button>
            <span>{cartItems[storeIndex].qty}</span>
            <button onClick={addToCart}>+</button>
          </div>
        )}
      </div>
    </div>
  );
}
