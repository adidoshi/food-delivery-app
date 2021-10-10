import React, { useContext } from "react";
import { Cart } from "../context/CartContext";
import Rating from "./Rating";

const SingleItem = (props) => {
  const {
    state: { cartList },
    dispatch,
  } = useContext(Cart);
  return (
    <>
      <div className="card mx-auto" style={{ width: "15rem" }}>
        <img src={props.item.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h6 className="card-title">{props.item.title}</h6>
          <p className="card-text">₹ {props.item.price.split(".")[0]}</p>
          {props.item.freeDelivery ? (
            <div className="me-3">Free Delivery</div>
          ) : (
            <div className="me-3">Charges Applied</div>
          )}
          <Rating rating={props.item.ratings} />

          {cartList.some((ele) => ele.id === props.item.id) ? (
            <div>
            <button  onClick={() =>
              dispatch({ type: "Remove_From_Cart", payLoad: props.item })
            }
            className="btn btn-danger mt-2">Remove from cart</button></div>
          ) : (
            <div>
            <button
              onClick={() =>
                dispatch({ type: "Add_To_Cart", payLoad: props.item })
              }
              className="btn btn-success mt-2"
              disabled={!props.item.offer}>
              {!props.item.offer ? "Not Available" : "Add to Cart"}
            </button></div>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleItem;
