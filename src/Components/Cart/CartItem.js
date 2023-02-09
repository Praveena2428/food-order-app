import React from "react";
import "./cart.css"

const CartItem = (props) => {
  const price=`$${props.price.toFixed(2)}`

  return (
    <li className="cart_items">
      <div>
        <h2>{props.name}</h2>
        <div className="summary">
            <div className="summary_price">{price}</div>
            <div className="summary_amount"> x {props.amount}</div>
        </div>
      </div>
      <div className="cart_action">
        <button onClick={props.onRemoveBtn}>-</button>
        <button onClick={props.onAddBtn}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
