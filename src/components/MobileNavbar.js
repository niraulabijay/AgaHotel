import React from "react";
import { Link , useRouteMatch, useHistory} from "react-router-dom";

export default function MobileNavbar() {
  const {url, path} = useRouteMatch();

const {location} = useHistory();
  function closeNav(e) {
    e.preventDefault();
    document.getElementById("mySidenav").style.width = "0";
  }

  function toggleToBrand(e){
    e.preventDefault();
    document.getElementById('brandSection').scrollIntoView();
    document.getElementById("mySidenav").style.width = "0";
  }

  // console.log(history.location.pathname,"here")
  return (
    <>
      <div id="mySidenav" className="sidenav">
        <a href="" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <Link className="nav_booknow" to="/hotel/all">
          Book Now
        </Link>
        <Link to="/register">Join Us</Link>
        {/* <Link to="#brandSection" onClick={closeNav}>Brand</Link> */}
        {
          location.pathname == "/" || location.pathname == "/brandSection" ? (
            <Link to="/" onClick={toggleToBrand}>Brand</Link>
          ) : (
            <Link to="/brandSection">Brand</Link>
          )
        }
        {/* <a href="#brandSection">Brands</a> */}
        <Link to="/about">About</Link>
        <Link to="/franchise">Franchise</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
}
