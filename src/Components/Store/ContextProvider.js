import React, { useReducer } from "react";
import CartItems from "./Context";

const initialValue = { items: [], totalAmount: 0 };

const cartReducer = (prevState, action) => {
  if (action.type === "Add") {
    const upadatedTotal =
      prevState.totalAmount + action.item.amount * action.item.price;

    const existingItemsIndex = prevState.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItems = prevState.items[existingItemsIndex];
    let upadatedItems;

    if (existingItems) {
      const updated = {
        ...existingItems,
        amount: existingItems.amount + action.item.amount,
      };
      upadatedItems = [...prevState.items];
      // in new array copy old items  without editing the old arr
      upadatedItems[existingItemsIndex] = updated;
    } else {
      upadatedItems = prevState.items.concat(action.item);
    }

    return {
      items: upadatedItems,
      totalAmount: upadatedTotal,
    };
  }
  if(action.type==="Remove"){
    const existingItemsIndex = prevState.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = prevState.items[existingItemsIndex];
    const updatedAmount = prevState.totalAmount - existingItem.price;
    let upadatedItems;
    if(existingItem.amount===1){
    upadatedItems=prevState.items.filter(item=>item.id !== action.id);
    
    }
    
    else{
      const updated ={...existingItem,amount:existingItem.amount - 1}
      upadatedItems=[...prevState.items]
      upadatedItems[existingItemsIndex]=updated;
    }
    return{
      items:upadatedItems,
      totalAmount:updatedAmount
    }
  }
  return initialValue;
};

const ContextProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialValue);
  const handlerAdd = (item) => {
    dispatch({ type: "Add", item: item });
  };
  const handledRemove = (id) => {
    dispatch({ type: "Remove", id: id });
  };
  const CartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: handlerAdd,
    removeItem: handledRemove,
  };
  return (
    <CartItems.Provider value={CartContext}>
      {props.children}
    </CartItems.Provider>
  );
};

export default ContextProvider;
