import React from "react";

function AboutBanner() {
  return (
    <>
      <div className="register-banner">
        <div className="service_header">
          <div className="service-bread">
            <ul>
              <li>
                <a href="">
                  Home <i className="fas fa-angle-double-right"></i>
                </a>
              </li>
              <li>
                <a className="active" href="">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="header">Our regards</div>
          <div className="sub_header">
            The more you stay, the more rewarding it gets
          </div>
        </div>
        <div className="service_banner_background_image"></div>
        <div className="service_banner_background_gradient"></div>
      </div>
    </>
  );
}

export default AboutBanner;
