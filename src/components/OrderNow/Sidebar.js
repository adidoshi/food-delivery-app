import React, { useContext } from "react";
import { Cart } from "../context/CartContext";
import MenuList from "./MenuList";
import Rating from "./Rating";
import { Form } from "react-bootstrap";

const Sidebar = () => {
  const {
    filterDispatch,
    filterState: { availability, freeDeliv, sort, byRating },
  } = useContext(Cart);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 col-sm-12 ipad-media">
            <div className="cartBox">
              <span>Filter Menu</span>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu">
                <li className="nav-item mb-3">
                  <Form.Check
                    inline
                    label="Ascending"
                    name="group1"
                    type="radio"
                    id={`inline-1`}
                    onChange={() =>
                      filterDispatch({
                        type: "Sort_By_Price",
                        payLoad: "lowToHigh",
                      })
                    }
                    checked={sort === "lowToHigh" ? true : false}
                  />
                </li>
                <li className="nav-item mb-3">
                  <Form.Check
                    inline
                    label="Descending"
                    name="group1"
                    type="radio"
                    id={`inline-2`}
                    onChange={() =>
                      filterDispatch({
                        type: "Sort_By_Price",
                        payLoad: "highToLow",
                      })
                    }
                    checked={sort === "highToLow" ? true : false}
                  />
                </li>
                <li>
                  <Form.Check
                    inline
                    label="Include Out of Stock"
                    name="group1"
                    type="checkbox"
                    id={`inline-3`}
                    onChange={() =>
                      filterDispatch({
                        type: "Filter_By_Avail",
                      })
                    }
                    checked={availability}
                  />
                </li>
                <li>
                  <Form.Check
                    inline
                    label="Free Delivery Only"
                    name="group1"
                    type="checkbox"
                    id={`inline-4`}
                    onChange={() =>
                      filterDispatch({
                        type: "Filter_By_Delivery",
                      })
                    }
                    checked={freeDeliv}
                  />
                </li>
                <li>
                  <div>
                    <label className="me-1">Rating: </label>
                    <Rating
                      rating={byRating}
                      style={{ cursor: "pointer" }}
                      click={(i) =>
                        filterDispatch({
                          type: "Filter_By_Rating",
                          payLoad: i + 1,
                        })
                      }
                    />
                  </div>
                </li>
                <li>
                  <button
                    className=" align-middle btn btn-warning mt-4"
                    onClick={() =>
                      filterDispatch({
                        type: "Clear_Filters",
                      })
                    }>
                    CLEAR FILTERS
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-10 col-sm-12">
            <MenuList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
