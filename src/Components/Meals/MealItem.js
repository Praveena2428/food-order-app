import MealsForm from "./MealsForm";
import React, { useContext } from "react";
import CartItems from "../Store/Context";

const MealItem = (props) => {
   const Cartctx = useContext(CartItems);
   const price=`$${props.price.toFixed(2)}`
  const AddtoCart = (amount) => {
    Cartctx.addItem({
      id: props.id,
      Name: props.name,
      amount: amount,
      price: props.price,
    });
  };
 
  return (
    <div>
      <li className="meal">
        <div>
          <h3>{props.name}</h3>
          <div className="meal-dis">{props.desc}</div>
          <div className="meal-price"> {price}</div>
        </div>
        <div>
          <MealsForm onAddToCart={AddtoCart} id={props.id}/>
        </div>
      </li>
    </div>
  );
};

export default MealItem;
