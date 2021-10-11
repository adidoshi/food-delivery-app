import React from "react";

const Rating = (props) => {
  return (
    <>
      {[...Array(5)].map((_, i) => {
        return (
          <span key={i} onClick={() => {
              props.click(i)
              }} style={props.style}>
            {
              <i
                className={
                  props.rating > i ? `bi bi-star-fill` : `bi bi-star`
                }></i>
            }
          </span>
        );
      })}
    </>
  );
};

export default Rating;
