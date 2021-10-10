import React, { useContext } from "react";

import { Cart } from "../context/CartContext";
import SingleItem from "./SingleItem";

const MenuList = () => {

  const {state: {menu}, filterState:{sort, availability, freeDeliv, byRating, searchQuery}} = useContext(Cart);

  const transMenu = () => {
      let sortedMenu = menu;

      if(sort) {
          sortedMenu = sortedMenu.sort((a, b) => 
          sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
          )
      }

      if(!availability) {
          sortedMenu = sortedMenu.filter((ele) => ele.offer);
      }

      if(freeDeliv) {
          sortedMenu = sortedMenu.filter((ele) => ele.freeDelivery);
      }

      if(byRating) {
          sortedMenu = sortedMenu.filter((ele) => ele.ratings >= byRating)
      }

      if(searchQuery) {
          sortedMenu = sortedMenu.filter((ele) => ele.title.toLowerCase().includes(searchQuery))
      }

      return sortedMenu;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {transMenu().map((elem) => {
            return (
              <div className="col-md-4 col-sm-12 my-4 mx-auto ipad-media2" key={elem.id}>
                <SingleItem item={elem} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MenuList;
