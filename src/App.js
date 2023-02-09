import "./App.css";
import { useState } from "react";
import ShoppingCart from "./Components/Cart/ShoppingCart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import ContextProvider from "./Components/Store/ContextProvider";
function App() {
  const [cartShown, setCartShown] = useState(false);

  const handlerShown = () => {
    setCartShown(true);
  };
  const handlerHidden = () => {
    setCartShown(false);
  };

  return (
    <div>
      <ContextProvider>
        {cartShown && <ShoppingCart hide={handlerHidden} />}
        <Header Show={handlerShown} />
        <Meals />
      </ContextProvider>
    </div>
  );
}

export default App;
