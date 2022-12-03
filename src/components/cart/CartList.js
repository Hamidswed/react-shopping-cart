import React, { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../../shared/context/cart-context";
import { Link } from "react-router-dom";
import "./CartList.css";

export default function CartList() {
  const [cartItems, setCartItems] = useContext(CartContext);
   const removeFromCart = (id) => {
    const index = cartItems.findIndex((object) => {
      return object.id === id;
    });
    
    if (cartItems[index].qty===1){
      const newCartItem = cartItems.filter((obj)=>obj.id!==id)
      setCartItems(newCartItem)
    } else {
      cartItems[index].qty-=1
      const newCartItem = [...cartItems]
      setCartItems(newCartItem)
    }
  };
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
            return <CartItem key={item.id} item={item} onDelete={removeFromCart}/>;
          })}
        </table>
      </div>
      {cartItems.length===0 ? <p>There is no product in the cart</p>:null}
      <Link to="/" className="cart-backbtn">
        <button type="button">Back</button>
      </Link>
    </div>
  );
}
