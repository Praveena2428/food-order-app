import React, { useRef, useState } from "react";
import Input from "../UI/Input";
import "./Meal.css";

const MealsForm = (props) => {
  const [valid, setValid] = useState(true);
  const inputRef = useRef();


  const handlerSubmit = (event) => {
    event.preventDefault();

    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber =Number(enteredAmount);
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);

  };
  return (
    <form className="meal_form" onSubmit={handlerSubmit}>
      <Input
        label="Amount"
        ref={inputRef}
        input={{
          id: 'amount_' + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!valid && <h1>Please Entered a Valid Amount(1-5)</h1>}
    </form>
  );
};

export default MealsForm;
