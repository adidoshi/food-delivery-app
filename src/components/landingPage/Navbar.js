import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md sticky-top navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link
            className="navbar-brand mx-auto bold-font"
            style={{ color: "#EF4444" }}
            to="/">
            SPLASH CAFE
          </Link>
          <div className="navbar-collapse collapse me-auto" id="collapseNavbar">
            <div className="me-auto order-0"></div>
            <ul className="navbar-nav">
              <li className="nav-item active mx-4 bold-font">
                <HashLink
                  className="nav-link nav-cursor active"
                  smooth
                  to="#home">
                  HOME
                </HashLink>
              </li>
              <li className="nav-item mx-4 bold-font">
                <HashLink className="nav-link nav-cursor" smooth to="#about">
                  ABOUT US
                </HashLink>
              </li>
              <li className="nav-item mx-4 bold-font">
                <HashLink className="nav-link nav-cursor" smooth to="#menu">
                  MENU
                </HashLink>
              </li>
            </ul>

            <ul className="navbar-nav me-auto">
              <li className="nav-item mx-4 bold-font">
                <HashLink className="nav-link nav-cursor" smooth to="#gallery">
                  GALLERY
                </HashLink>
              </li>
              <li className="nav-item mx-4 bold-font">
                <HashLink
                  className="nav-link con-resp nav-cursor"
                  smooth
                  to="#contact">
                  CONTACT US
                </HashLink>
              </li>
            </ul>
            <Link
              className="btn btn-outline-warning btn-resp"
              type="submit"
              to="/orderNow">
              ORDER NOW
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
