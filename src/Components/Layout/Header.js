import React from "react";
import "./header.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <div>
      <header className="heading">
        <h1>ReactMeals</h1>
        <HeaderCartButton  onShown={props.Show} />
      </header>
      <div className="Food_background">
        <img src="./assets/food.jpg" alt="food" />
      </div>
    </div>
  );
};

export default Header;
