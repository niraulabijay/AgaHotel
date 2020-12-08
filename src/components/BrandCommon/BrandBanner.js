import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import Slider from "react-slick";
import BannerEffect from "../../helpers/BannerEffect";
import SearchNavField from "../SearchNavField";
import { useRouteMatch, useHistory } from "react-router-dom";
// import { param } from "jquery";
// import Axios from "axios"
// import axiosInstance from "../../helpers/axios";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function BrandBanner(props) {
  const { brand, banner } = props;

  useEffect(() => {
    var navbar = document.querySelector(".navbar-wrapper");
    var firstNavbar = document.querySelector(".first-navbar-wrapper");
    var bookingBtn = document.querySelector(".booking-btn");
    window.onscroll = function () {
      if (navbar != null) {
        scrollFunction();
      }
    };
    var sticky = navbar.offsetTop + 5;
    function scrollFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky" + props.brandcolor);
        firstNavbar.style.display = "none";
        bookingBtn.style.background = "#ff9800";
      } else {
        navbar.classList.remove("sticky" + props.brandcolor);
        firstNavbar.style.display = "flex";
        bookingBtn.style.background = "none";
      }
    }
  }, []);

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  return (
    <>
      <div className="banner" id="topbanner">
        <div className={`navbar-wrapper ${props.brandcolor}`}>
          <div className="primary-navbar container">
            <div className="bars-call d-block d-lg-none">
              {/* <i class="fas fa-phone-alt"></i> */}
              {/* <i class="fas fa-phone-alt"></i> */}
              <i class="fas fa-phone-volume"></i>
            </div>
            <Link to="/" className="logo-container brand-logo">
              <img src={brand ? brand.logo : ""} className="img-fluid" alt="" />
            </Link>

            {/* <Link to="/" className="logo-container">
              <img
                src={require("../../assets/images/agaLogo.png")}
                className="img-fluid"
                alt=""
              />
            </Link> */}

            <div className="primary-content">
              <ul className="first-navbar-wrapper">
                <li>
                  <i class="fas fa-phone-alt"></i>
                  <select name="" id="">
                    <option value="">+1 (415) - 555 2671 </option>
                    <option value="">+1 (415) - 554 2661 </option>
                  </select>
                </li>
                <li>
                  <Link to="/register">Join Us</Link>
                </li>
              </ul>
              <ul className="second-navbar-wrapper">
                <li>
                  <NavLink to="/franchise">Franchise</NavLink>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <a className="booking-btn" href="#topbanner">
                    Booking
                  </a>
                </li>
              </ul>
            </div>
            <div className="bars d-block d-lg-none">
              <span onClick={openNav}>
                <i className="fa fa-bars"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="slider-wrapper">
          <Slider {...settings}>
            <div className="slider">
              <div className="img-container">
                <img
                  src={banner && banner.image}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div
                className={
                  "overlay-container" +
                  " " +
                  (brand.slug == "aga-hotel" ? "agaoverlay" : "")
                }
              >
                <div className="container">
                  <div className="title">We Care About You</div>
                  <div className="subtitle">
                    Peace of mind and greater travel flexibility are yours with
                    our extended cancellation policy.
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <SearchNavField />
      </div>
    </>
  );
}
