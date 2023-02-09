import React, { useContext,useState} from "react";
import CartItems from "../Store/Context";
import "./cart.css";
import CartItem from "./CartItem";

const ShoppingCart = (props) => {
  const[open,setOpen]=useState(false)
  const cartCtx = useContext(CartItems);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const handlerAddCart = (item) => {
    cartCtx.addItem({
      ...item,
      amount: 1,
    });
  };

  const handlerRemoveCart = (id) => {
    cartCtx.removeItem(id);
  };
 const handleClick=()=>{
  setOpen(true)
  alert("Order Placed")
 }
  return (
    <div className="backdrop">
      <div className="shopping-cart">
        <ul>
          {cartCtx.items.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.Name}
              price={item.price}
              amount={item.amount}
              onAddBtn={handlerAddCart.bind(null, item)}
              onRemoveBtn={handlerRemoveCart.bind(null, item.id)}
            />
          ))}
        </ul>
        <div className="cart-total">
          <div>Total Amount</div>
          <div>{totalAmount}</div>
        </div>
        <div className="actions">
          <button className="close-btn" onClick={props.hide}>
            Close
          </button>

          {cartCtx.items.length > 0 && !open && (
            <button className="button"onClick={handleClick}>Order</button>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
