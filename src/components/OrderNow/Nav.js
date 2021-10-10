import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../context/CartContext";

const Nav = () => {
  const {
    state: { cartList },
    dispatch,
    filterDispatch,
  } = useContext(Cart);
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
            className="navbar-brand m-auto bold-font"
            style={{ color: "/EF4444" }}
            to="/">
            SPLASH CAFE
          </Link>
          <div className="navbar-collapse collapse" id="collapseNavbar">
            <form className="d-flex m-auto">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) =>
                  filterDispatch({
                    type: "Filter_By_Search",
                    payLoad: e.target.value,
                  })
                }
              />
            </form>

            <div className="btn-group m-auto">
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  {cartList.length}
                </span>
              </button>
              <ul className="dropdown-menu">
                {cartList.length > 0 ? (
                  <>
                    {cartList.map((item) => {
                      return (
                        <React.Fragment key={item.id}>
                          <li>
                            <span className="dropdown-item">{item.title}</span>
                            <span className="dropdown-item">
                              <b style={{ marginRight: "135px" }}>
                                ₹ {item.price.split(".")[0]}
                              </b>
                              <span>
                                <i
                                  onClick={() =>
                                    dispatch({
                                      type: "Remove_From_Cart",
                                      payLoad: item,
                                    })
                                  }
                                  className="bi bi-trash-fill"
                                  style={{
                                    fontSize: "20px",
                                    color: "red",
                                    cursor: "pointer",
                                  }}></i>
                              </span>
                            </span>
                          </li>
                          <hr />
                        </React.Fragment>
                      );
                    })}
                    <Link to="/cart" className="btn btn-primary ms-2">
                      View Cart Page
                    </Link>
                  </>
                ) : (
                  <li>
                    <span className="dropdown-item">Cart is Empty</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
