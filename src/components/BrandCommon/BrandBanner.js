import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import Slider from "react-slick";
import BannerEffect from "../../helpers/BannerEffect";
import SearchNavField from "../SearchNavField";
import {useRouteMatch, useHistory} from 'react-router-dom'
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
  const {brand, banner} = props
  
  useEffect(() => {
    var navbar = document.getElementById("searchBar");
    window.onscroll = function () {
      if (navbar != null) {
        scrollFunction();
      }
    };
    var sticky = navbar.offsetTop + 35;
    function scrollFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
  }, []);
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }


  return (
    <>
      <div className="banner">
        <div className="navbar-wrapper">
          <div className="primary-navbar container">
            <Link to="/" className="logo-container">
              <img
                src={brand ? brand.logo: ''}
                className="img-fluid"
                alt=""
              />
            </Link>
            <div className="primary-content">
              <ul className="first-navbar-wrapper">
                <li>
                  <i className="fa fa-phone"></i>
                  <select name="" id="">
                    <option value="">+1 (415) - 555 2671 </option>
                    <option value="">+1 (415) - 554 2661 </option>
                  </select>
                </li>
                <li>
                  <a href="">Bookings</a>
                </li>
                <li>
                  <a href="">FAQ</a>
                </li>
                <li>
                  <select name="" id="">
                    <option value="">English</option>
                    <option value="">German</option>
                  </select>
                </li>
              </ul>
              <ul className="second-navbar-wrapper">
              <li>
									<NavLink to="/deal" >Deals</NavLink>
								</li>

								<li>
									<NavLink to="/about">About</NavLink>
								</li>
								<li>
									<NavLink to="/supply">Supply</NavLink>
								</li>
								<li>
									<NavLink to="/franchise">Franchise</NavLink>
								</li>
								<li>
									<Link to="/register">Join Us</Link>
								</li>
              </ul>
            </div>
            <div className="bars d-block d-md-none">
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
            </div>
            
          </Slider>
        </div>

        <SearchNavField />
      </div>
    </>
  );
}
