import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function FixedNavbar() {

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  return (
    <>
      <div className="navbar-wrapper">
        <div className="primary-navbar container">
          <Link to="/" className="logo-container">
            <img
              src={require("../assets/images/logo2.png")}
              className="img-fluid"
              alt=""
            />
          </Link>
          <div className="primary-content">
            <ul className="first-navbar-wrapper">
              <li>
                <i className="fa fa-phone"></i>
                <select name="" id="">
                  <option value="">+1 (415) - 555 2671</option>
                  <option value="">+1 (415) - 554 2661</option>
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
    </>
  );
}
