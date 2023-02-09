import React from "react";

const Card = (props) => {
  const Cardstyle = {
    backgroundColor: "white",
    borderRadius: "20px",
    border: "1px solid white",
    padding: "10px",
  };
  return <div style={Cardstyle}>{props.children}</div>;
};

export default Card;
