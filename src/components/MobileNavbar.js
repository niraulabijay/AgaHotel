import React from "react";
import { Link } from "react-router-dom";

export default function MobileNavbar() {
  function closeNav(e) {
    e.preventDefault();
    document.getElementById("mySidenav").style.width = "0";
  }
  return (
    <>
      <div id="mySidenav" className="sidenav">
        <a href="" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <Link className="nav_booknow" to="/hotel/all">Book Now</Link>
        <Link to="/register">Join Us</Link>
        <Link to="/about">About</Link>
        <Link to="/franchise">Franchise</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
}
