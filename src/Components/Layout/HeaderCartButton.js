import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartItems from "../Store/Context";
import "./header.css";

const HeaderCartButton = (props) => {
  const [highLighted, setHighLighted] = useState(false);
  const cartCtn = useContext(CartItems);
  const numberOfCart = cartCtn.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (cartCtn.items.length === 0) {
      return;
    }
    setHighLighted(true);

    const timer = setTimeout(() => {
      setHighLighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartCtn.items]);
  const btnClass = `${"header_button"} ${highLighted && "bump"}`;
  return (

    <button className={btnClass} onClick={props.onShown}>
      <div className="icon">
        <CartIcon />
      </div>
      <div className="para">Your Cart</div>
      <div className="badge">{numberOfCart}</div>
    </button>
  );
};

export default HeaderCartButton;
