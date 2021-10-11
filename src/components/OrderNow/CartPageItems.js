import React, { useContext, useState, useEffect } from "react";
import { Cart } from "../context/CartContext";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

const CartPageItems = () => {
  const {
    state: { cartList },
    dispatch,
  } = useContext(Cart);

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cartList.reduce((acc, curr) => (acc + +curr.price) * curr.qty, 0));
  }, [cartList]);

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            {cartList.map((elem) => {
              return (
                <React.Fragment key={elem.id}>
                  <div className="card w-100 my-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-2">
                          <img
                            className="img-fluid"
                            src={elem.image}
                            alt="..."
                          />
                        </div>
                        <div className="col-md-2">
                          <h5 className="card-title">{elem.title}</h5>
                        </div>
                        <div className="col-md-2">
                          <p className="card-text">
                            ₹ {elem.price.split(".")[0]}
                          </p>
                        </div>
                        <div className="col-md-2">
                          <Rating rating={elem.ratings} />
                        </div>
                        <div className="col-md-2">
                          <Form.Control
                            as="select"
                            value={elem.qty}
                            style={{ cursor: "pointer" }}
                            onChange={(e) =>
                              dispatch({
                                type: "Change_Cart_Qty",
                                payLoad: {
                                  id: elem.id,
                                  qty: e.target.value,
                                },
                              })
                            }>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </Form.Control>
                        </div>
                        <div className="col-md-2">
                          <i
                            onClick={() =>
                              dispatch({
                                type: "Remove_From_Cart",
                                payLoad: elem,
                              })
                            }
                            className="bi bi-trash-fill"
                            style={{
                              fontSize: "20px",
                              color: "red",
                              cursor: "pointer",
                              display: "block",
                            }}></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
          <div className="col-md-4">
            <div className="cartBox">
              <h2 className="mb-3">
                Sub Total <span>({cartList.length})</span>
              </h2>
              <h4 className="mb-4">Total Price: ₹ {total} </h4>
              <Link to="/" className="btn btn-primary">
                Proceed to checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPageItems;
