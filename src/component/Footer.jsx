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
          <div className="mt-25px mb-25px">
            <div className="row">
              <div className="col-md-4">
                <h5>About Us.</h5>
                <p>
                  We want to bring healthy organic food to every people as well
                  as make agriculture easy and accessible to everyone. Together
                  we can create jobs by making agriculture easy to engage in and
                  profitable to anyone, anywhere. We desire to improve rural
                  standard of living by enabling rural farmers through access to
                  funds, and market proximity regardless of their farm
                  locations.
                </p>
              </div>
              <div className="col-md-4">
                <h5 className="mb-20px">Contact Us</h5>
                <h6 className="">
                  <i className="fa fa-map-marker mr-5px fs-15 color-blue bg-gray radius-50 address text-center"></i>
                  52, Hillview Estate, Life Camp, Abuja.
                </h6>
                <h6 className="">
                  <i className="fa fa-map-marker mr-5px fs-15 color-blue bg-gray radius-50 address text-center"></i>
                  46, Autumn Ln, Burlington, NJ
                </h6>
                <h6 className="">
                  <i className="fa fa-phone mr-5px fs-15 color-blue bg-gray radius-50 address text-center"></i>{" "}
                  +1281-640-6485
                </h6>
                <h6 className="mb-10px">
                  <i className="fa fa-envelope mr-5px fs-15 color-blue bg-gray radius-50 address text-center"></i>
                  jmmisadev@gmail.com
                </h6>
                <h6 className="mb-30px">
                  <i className="fa fa-envelope mr-5px fs-15 color-blue bg-gray radius-50 address text-center"></i>
                  info@jmmisa.com
                </h6>
              </div>
              <div className="col-md-4">
                <h5>We are social</h5>
              </div>
            </div>
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
