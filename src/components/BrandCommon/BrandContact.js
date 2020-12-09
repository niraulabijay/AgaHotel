import React from "react";
import { Link } from "react-router-dom";

export default function BrandContact() {
  return (
    <>
      <div className="brandjoin-banner">
        <div className="service_header">
          <div className="header">Join AGA Reward Now</div>
          {/* <div className="sub_header">lorem lorem lorem</div> */}
          <div className="brand-button">
            <Link to="/register">
              <span>Join now</span>
            </Link>
          </div>
        </div>
        <div className="service_banner_background_image"></div>
        <div className="service_banner_background_gradient"></div>
      </div>
    </>
  );
}

//  <div class="top-footer">
//    <div class="container">
//      <div class="item-container brand-item">
//        <div class="item-wrapper">
//          <div class="title">CONTACT</div>
//          <div class="row">
//            <div class="col-md-4">
//              <div class="sub-title">Hotel Erth Inn</div>
//              <div class="sub-title">Kevin Marshall</div>
//            </div>
//            <div class="col-md-4">
//              <div class="sub-title">Tel: (+123)-232-833434</div>
//              <div class="sub-title">Kevin Marshall</div>
//            </div>
//            <div class="col-md-4">
//              <div class="sub-title">Follow Us On:</div>
//              <ul class="social-link">
//                <li>
//                  <a href="https://www.facebook.com/AGAHOTELS" target="_blank">
//                    <i className="fab fa-facebook"></i>
//                  </a>
//                </li>
//                <li>
//                  <a href="https://www.instagram.com/agahotels" target="_blank">
//                    <i className="fab fa-instagram"></i>
//                  </a>
//                </li>
//                <li>
//                  <a href="https://twitter.com/AGAHOTELS" target="_blank">
//                    <i className="fab fa-twitter"></i>
//                  </a>
//                </li>
//                <li>
//                  <a
//                    href="https://www.tumblr.com/blog/view/agahotels"
//                    target="_blank"
//                  >
//                    <i className="fab fa-tumblr"></i>
//                  </a>
//                </li>
//              </ul>
//            </div>
//          </div>
//        </div>
//      </div>
//    </div>
//  </div>;
