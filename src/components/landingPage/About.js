import React from "react";

const About = () => {
  return (
    <>
      <section style={{backgroundColor:'#F87171'}} id="about">
        <div className="container">
          <div className="section-heading">
            <h2 style={{textAlign:'center', padding: '15px'}} className='mb-3 gallery-heading'>About us</h2>
          </div>

          <img src="https://cafepetermahab.com/img/about1.jpg" className="img-fluid about-img mb-4" alt="..." />

          <div className="row">
            <div className="col-md-12 top-margin">
              <h3 className="text-center">Splash Café</h3>
              <p className="text-center">
                <b>Splash Cafe is more than just a café. Playing with a fusion of
                Indian, Korean and British look and ambience food. We engage the
                customers to a wide variety of menu. Every item prepared at the
                cafe has its own signature recipe, as its crisp, fresh and
                prepared by expert chefs. The café only relies on fresh
                ingredients to prepare a dish, ensuring that it meets the
                brand's preset quality standards. For this, the brand works
                closely with all its suppliers to ensure consistent quality,
                taste and most importantly, the freshness of the products.</b>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
