import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Slider from "react-slick";
import SearchNavField from "./SearchNavField";
export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
            <div className="bars-call d-block d-lg-none">
              {/* <i class="fas fa-phone-alt"></i> */}
              <i class="fas fa-phone-volume"></i>
            </div>
            <Link to="/" className="logo-container">
              <img
                src={require("../assets/images/agaLogo.png")}
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
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <select name="" id="">
                    <option value="">English</option>
                    <option value="">German</option>
                  </select>
                </li>
              </ul>
              <ul className="second-navbar-wrapper">
                {/* <li>
                  <NavLink to="/deal">Deals</NavLink>
                </li> */}

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
                  <NavLink to="/faq">FAQ</NavLink>
                </li>
                <li>
                  <Link to="/register">Join Us</Link>
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
              <div className="img-container home-banner">
                <img
                  src={require("../assets/images/b.jpg")}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="overlay-container">
                <div className="container">
                  <div className="title">We Care About You</div>
                  <div className="subtitle">
                    Peace of mind and greater travel flexibility are yours with
                    our extended cancellation policy.
                  </div>
                </div>
              </div>
            </div>
            <div className="slider">
              <div className="img-container">
                <img
                  src={require("../assets/images/c.jpg")}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="overlay-container">
                <div className="container">
                  <div className="title">We Care About You</div>
                  <div className="subtitle">
                    Peace of mind and greater travel flexibility are yours with
                    our extended cancellation policy.
                  </div>
                </div>
              </div>
            </div>
            <div className="slider">
              <div className="img-container">
                <img
                  src={require("../assets/images/e.jpg")}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="overlay-container">
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
