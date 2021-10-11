import React from "react";
import { Link } from "react-router-dom";


const CartPageNav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md sticky-top navbar-light bg-light">
        <div className="container-fluid">
          <Link
            className="navbar-brand m-auto bold-font"
            style={{ color: "/EF4444" }}
            to="/orderNow">
            <i className="bi bi-arrow-left-square-fill"></i> BACK TO MENU
          </Link>
        </div>
      </nav>
    </>
  );
};

export default CartPageNav;
