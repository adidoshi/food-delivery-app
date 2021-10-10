import React from "react";

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1574111249592-65c002336986?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FmZXx8fHx8fDE2MzM2NjY5Nzc&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=420",
    "https://images.unsplash.com/photo-1574919369977-5ecb109b5a74?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FmZXx8fHx8fDE2MzM2NjY5OTk&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=420",
    "https://images.unsplash.com/photo-1534201569625-ed4662d8be97?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FmZXx8fHx8fDE2MzM2NjcwMjM&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=420",
    "https://images.unsplash.com/photo-1613564834361-9436948817d1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixid=MnwxfDB8MXxyYW5kb218MHx8cGl6emF8fHx8fHwxNjMzNjY2NTUx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=420",
    "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29mZmVlfHx8fHx8MTYzMzY2NjkxOA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=420",
    "https://images.unsplash.com/photo-1543339531-242d0bc29010?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFzdGF8fHx8fHwxNjMzNjY2OTUy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=420",
  ];
  return (
    <>
      <section className="gallery" id="gallery">
        <div className="container ">
          <div className="gallery-heading">GALLERY</div>
          <div className="row">
            {images.map((elem, i) => {
              return (
                <div
                  className="col-md-4 col-sm-12 justify-content-evenly"
                  key={i}>
                  <div className="card mx-auto my-4" style={{ width: "18rem" }}>
                    <img src={elem} className="card-img-top" alt="..." />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
