import React from "react";

const Section = () => {
  return (
    <>
      <section style={{ backgroundColor: "#000" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <img
                className="services_image hidden-sm hidden-xs mt-5"
                src="https://cafepetermahab.com/img/service.png"
                alt=""
              />
            </div>
            <div className="text-center white_block col-sm-12 col-md-7 mt-5">
              <h3 className="para-heading">Delicious &amp; fresh</h3>
              <p className="subtitle bold-font">Enjoy This Amazing Experience</p>
              <p style={{ padding: "5px" }}>
                Café Splash is more than just a café. Playing with a fusion of
                Indian, Korean and British look and ambience food. We engage the
                customers to a wide variety of menu. Every item prepared at the
                cafe has its own signature recipe, as its crisp, fresh and
                prepared by expert chefs. The café only relies on fresh
                ingredients to prepare a dish, ensuring that it meets the
                brand's preset quality standards. For this, the brand works
                closely with all its suppliers to ensure consistent quality,
                taste and most importantly, the freshness of the products. We
                are quite famous for two things: Korean dishes, free and fast
                Wi-Fi and this is what we have been able to build for you.
              </p>
            </div>
          </div>
        </div>
        <img
          src="https://cafepetermahab.com/1.jpeg"
          style={{ height: "150px", marginTop: "-100px" }}
          alt="..."
          className= 'services_image'
        />
      </section>
    </>
  );
};

export default Section;
