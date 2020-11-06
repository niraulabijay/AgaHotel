import React from "react";
import {Link} from "react-router-dom";

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
        <Link to="/supply">Supply</Link>
        <Link to="/franchise">Franchise</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/brand/aga-hotel">Brands</Link>
      </div>
    </>
  );
}
