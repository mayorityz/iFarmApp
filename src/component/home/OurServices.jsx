import React from "react";

const OurServices = () => {
  return (
    <>
      <section
        className="services-area-5 sec-padding text-center p-relative"
        data-scroll-index="3"
      >
        <div className="container">
          <h1 className="title-h">Our Products and Services</h1>
          <p className="title-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="row">
            <div className="col-md-4">
              <div
                className="services-text pl-30px pr-30px mt-25px mb-25px wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <i className="im im-umbrella p-absolute color-blue fs-35 bg-gray text-center radius-50 mb-25px transition-2"></i>
                <div className="pl-">
                  <h4 className="mb-5px">Safe Investments</h4>
                  <span className="color-blue bg-gray pl-15px pr-15px pt-5px pb-5px radius-50px fw-400 fs-14">
                    Provide High Quality
                  </span>
                  <p className="mt-15px">
                    You don't need to own a physical farm, but by investing in
                    one on iFarm, you can monitor the progress made on your farm
                    via your dashboard.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="services-text pl-30px pr-30px mt-25px mb-25px wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <i className="im im-sun p-absolute color-blue fs-35 bg-gray text-center radius-50 mb-25px transition-2"></i>
                <div className="pl-">
                  <h4 className="mb-5px">Sell Farm Produce</h4>
                  <span className="color-blue bg-gray pl-15px pr-15px pt-5px pb-5px radius-50px fw-400 fs-14">
                    Provide High Quality
                  </span>
                  <p className="mt-15px">
                    iFarm connects you to buyers and investor immediately, while
                    also providing delivery services for your already "paid-for"
                    items. Seamless transactions for you.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="services-text pl-30px pr-30px mt-25px mb-25px wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <i className="im im-wrench p-absolute color-blue fs-35 bg-gray text-center radius-50 mb-25px transition-2"></i>
                <div className="pl-">
                  <h4 className="mb-5px">Verified Members</h4>
                  <span className="color-blue bg-gray pl-15px pr-15px pt-5px pb-5px radius-50px fw-400 fs-14">
                    Provide High Quality
                  </span>
                  <p className="mt-15px">
                    iFarm verifies every member on its platform, every progress
                    is monitored to create a community of farmers, vendors,
                    investors and buyer, committed to quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-work text-center sec-padding">
        <div className="container">
          <h1 className="title-h">How It Works</h1>
          <p className="title-p">
            Using the iFarms platform is as easy as ABC ...
          </p>
          <div className="row">
            <div className="col-md-4 p-relative">
              <div className="mt-25px mb-25px pr-30px pl-30px">
                <span className="p-relative d-inline-block bg-gray color-blue radius-50 text-center fs-30 fw-600 mb-15px transition-3">
                  01
                </span>
                <h4>Select Product</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
            <div className="col-md-4 p-relative">
              <div className="mt-25px mb-25px pr-30px pl-30px">
                <span className="p-relative d-inline-block bg-gray color-blue radius-50 text-center fs-30 fw-600 mb-15px transition-3">
                  02
                </span>
                <h4>Buy Safely</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
            </div>
            <div className="col-md-4 p-relative last-one">
              <div className="mt-25px mb-25px pr-30px pl-30px">
                <span className="p-relative d-inline-block bg-gray color-blue radius-50 text-center fs-30 fw-600 mb-15px transition-3">
                  03
                </span>
                <h4>Receive Delivery</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
