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
        <Link to="/about">About</Link>
        <Link to="/franchise">Franchise</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/reward">Reward</Link>
        <Link to="/register">Join Us</Link>
        <div
          className="bottom-search-bar-mobile"
          data-toggle="modal"
          data-target="#myModal"
        >
          <Link>Book Now</Link>
        </div>
      </div>
    </>
  );
}
