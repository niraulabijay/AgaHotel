import React from "react";

function ContactBanner() {
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
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="header">Contact Aga Hotels</div>
          <div className="sub_header">Contact us for more details.</div>
        </div>
        <div className="service_banner_background_image"></div>
        <div className="service_banner_background_gradient"></div>
      </div>
    </>
  );
}

export default ContactBanner;
