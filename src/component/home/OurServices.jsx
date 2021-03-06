import React from "react";
import { Link } from "react-router-dom";

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
            Garri, Yam, Cassava, Rice, Beans, Eggs, Chicken, Fruits - Banana,
            Orange, Plantain, Palm Oil, Vegetables, Pepper, Tomatoes, etc.
          </p>
          <p>
            We deal in all food items that can be sourced directly from farm. We
            present these products to you organically, cleaned and packaged
          </p>
          <div className="row">
            <div className="col-md-4">
              <div
                className="services-text pl-30px pr-30px mt-25px mb-25px wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <i className="im im-umbrella p-absolute color-blue fs-35 bg-gray text-center radius-50 mb-25px transition-2"></i>
                <div className="pl-">
                  <h4 className="mb-5px">Select Product</h4>
                  <span className="color-blue bg-gray pl-15px pr-15px pt-5px pb-5px radius-50px fw-400 fs-14">
                    Provide High Quality
                  </span>
                  <p className="mt-15px">
                    After creating your account, select the product you want to
                    buy or sell.
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
          <hr />
        </div>
      </section>

      <section className="how-work text-center sec-padding">
        <div className="container">
          <h1 className="title-h">How It Works</h1>
          <p className="title-p">
            Using the iFarms platform is as easy as ABC ...
          </p>
          <div className="row">
            <div className="col-md-3 p-relative">
              <div className="mt-25px mb-25px pr-30px pl-30px">
                <span className="p-relative d-inline-block bg-gray color-blue radius-50 text-center fs-30 fw-600 mb-15px transition-3">
                  01
                </span>
                <h4>Create An Account</h4>
                <p>
                  Go to the <Link to="/newaccount">Registration</Link> page,
                  fill in all required details and a verification link will be
                  sent to your email for confirmation.
                </p>
              </div>
            </div>

            <div className="col-md-3 p-relative">
              <div className="mt-25px mb-25px pr-30px pl-30px">
                <span className="p-relative d-inline-block bg-gray color-blue radius-50 text-center fs-30 fw-600 mb-15px transition-3">
                  02
                </span>
                <h4>Select Product</h4>
                <p>
                  After creating your account and verifying it, login to your
                  dashboard to access our wide variety of produce to start
                  buying. Just add to cart.
                </p>
              </div>
            </div>
            <div className="col-md-3 p-relative">
              <div className="mt-25px mb-25px pr-30px pl-30px">
                <span className="p-relative d-inline-block bg-gray color-blue radius-50 text-center fs-30 fw-600 mb-15px transition-3">
                  03
                </span>
                <h4>Buy Safely</h4>
                <p>
                  Add the product to cart and make payment. Fill out all prompts
                  so we know your location and quantity you want to buy
                </p>
              </div>
            </div>
            <div className="col-md-3 p-relative last-one">
              <div className="mt-25px mb-25px pr-30px pl-30px">
                <span className="p-relative d-inline-block bg-gray color-blue radius-50 text-center fs-30 fw-600 mb-15px transition-3">
                  04
                </span>
                <h4>Receive Delivery</h4>
                <p>
                  Ensure someone is at home to receive your product. We also
                  offer contactless delivery, if your order specifies, we can
                  leave your package at your doorstep
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
