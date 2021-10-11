import React, { createContext, useReducer } from "react";
import { cartReducer, filterReducer } from "./CartReducer";
import data from './data.json'

export const Cart = createContext();

const CartContext = (props) => {
const menuItems = data.map((ele) => ({
  id: ele.id,
  title: ele.title,
  price: ele.price,
  image: ele.image,
  offer: ele.offer,
  freeDelivery: ele.freeDelivery,
  ratings: ele.ratings,
}))

  const [state, dispatch] = useReducer(cartReducer, {
    menu: menuItems,
    cartList: [],
  });

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    availability: false,
    freeDeliv: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <>
      <Cart.Provider value={{ state, dispatch, filterState, filterDispatch }}>
        {props.children}
      </Cart.Provider>
    </>
  );
};

export default CartContext;
