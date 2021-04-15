import React from "react";
import { Link } from "react-router-dom";
const footerStyle = {
  paddingTop: 10,
  paddingBottom: 10,
  backgroundColor: "#f6f6f6",
};
const Footer = () => {
  return (
    <>
      <section className="footer-area sec-padding" style={footerStyle}>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-6">
              <div className="mt-25px mb-25px">
                <h4 className="mb-20px text-center">Contact Us</h4>
                <p className="mb-20px text-center">You can reach us at:</p>
                <h6 className=" text-center">
                  <i className="fa fa-map-marker mr-5px fs-15 color-blue bg-gray radius-50 address text-center"></i>
                  52, Hillview Estate, Life Camp, Abuja.
                </h6>
                <h6 className=" text-center">
                  <i className="fa fa-map-marker mr-5px fs-15 color-blue bg-gray radius-50 address text-center"></i>
                  46, Autumn Ln, Burlington, NJ
                </h6>
                <h6 className=" text-center">
                  <i className="fa fa-phone mr-5px fs-15 color-blue bg-gray radius-50 address text-center"></i>{" "}
                  +1281-640-6485
                </h6>
                <h6 className="mb-10px text-center">
                  <i className="fa fa-envelope mr-5px fs-15 color-blue bg-gray radius-50 address text-center"></i>
                  jmmisadev@gmail.com
                </h6>
                <h6 className="mb-30px text-center">
                  <i className="fa fa-envelope mr-5px fs-15 color-blue bg-gray radius-50 address text-center"></i>
                  info@jmmisa.com
                </h6>
                {/* <a
                  href="#0"
                  className="social color-blue color-fff-hvr bg-orange-hvr bg-gray text-center radius-50 fs-15 d-inline-block"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  href="#0"
                  className="social color-blue color-fff-hvr bg-orange-hvr bg-gray text-center radius-50 fs-15 d-inline-block"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  href="#0"
                  className="social color-blue color-fff-hvr bg-orange-hvr bg-gray text-center radius-50 fs-15 d-inline-block"
                >
                  <i className="fa fa-linkedin"></i>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray sm-padding text-center">
        <div className="container">
          <h6 className="mb-0px">© 2021. All Rights Reserved.</h6>
        </div>
      </section>
    </>
  );
};

export default Footer;
