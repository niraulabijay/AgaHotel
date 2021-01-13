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
          <div className="bars-call d-block d-lg-none">
          <a href="tel:1 (747) 242- 3136"><i class="fas fa-phone-volume"></i></a>
          </div>
          <Link to="/" className="logo-container">
            <img
              src={require("../assets/images/agalogo1.png")}
              className="img-fluid"
              alt=""
            />
          </Link>
          <div className="primary-content">
            <ul className="first-navbar-wrapper">
              <li style={{color: "white"}}>
                  <i class="fas fa-phone-alt" style={{paddingRight: "5px"}}></i>
                    +1 (818) 395-9949
                </li>
              <li className="fixednav-joinus">
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

            </ul>
          </div>
          <div className="bars d-block d-lg-none">
            <span onClick={openNav}>
              <i className="fa fa-bars"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
