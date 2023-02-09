import React, { forwardRef } from "react";

const Input = forwardRef((props,ref) => {
  const inputItem = {
    borderRadius: "5px",
    padding: "5px",
    border: "1px solid #ccc",
  };
  const form = {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  };
  const lableStyle = {
    fontWeight: "bold",
    marginRight: "10px",
    fontSize:"18px"
  };
  return (
    <div style={form}>
      <label htmlFor={props.input.id} style={lableStyle}>
        {props.label} 
      </label>
      <input ref={ref} {...props.input} style={inputItem}  />
    </div>
  );
});

export default Input;
