import React from "react";

function RewardBanner() {
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
                  Reward
                </a>
              </li>
            </ul>
          </div>
          <div className="header">Reward / Coupons</div>
          <div className="sub_header"></div>
        </div>
        <div className="service_banner_background_image"></div>
        <div className="service_banner_background_gradient"></div>
      </div>
    </>
  );
}

export default RewardBanner;
