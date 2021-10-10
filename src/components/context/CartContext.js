import React, { createContext, useReducer } from "react";
import faker from "faker";
import { cartReducer, filterReducer } from "./CartReducer";

export const Cart = createContext();

const CartContext = (props) => {
  faker.seed(99);

  const menuItems = [...Array(21)].map(() => ({
    id: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    offer: faker.random.arrayElement([0, 3, 5, 6, 7]),
    freeDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));

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
