import React, { useEffect, useState } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import axiosInstance from "../helpers/axios";
import Axios from "axios";

export default function MobileNavbar() {
  const { url, path } = useRouteMatch();
  const [brands, setBrands] = useState([]);

  const { location } = useHistory();
  function closeNav(e) {
    e.preventDefault();
    document.getElementById("mySidenav").style.width = "0";
  }

  function toggleToBrand(e) {
    e.preventDefault();
    document
      .getElementById("brandSection")
      .scrollIntoView({ behavior: "smooth", block: "start" });
    document.getElementById("mySidenav").style.width = "0";
  }

  useEffect(() => {
    let source = Axios.CancelToken.source();
    const loadData = async () => {
      try {
        const response = axiosInstance.get("/brands", {
          cancelToken: source.token,
        });
    
        setBrands((await response).data.brands);
      } catch (error) {
        if (!Axios.isCancel(error)) {
          throw error;
        }
      }
      return () => {
        source.cancel();
      };
    };
    loadData();
  }, []);

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

        <div class="dropdown show">
          <a
            class="btn dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Brand
          </a>

          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            {brands.map((brand) => (
              <Link class="dropdown-item" to={"/brand/" + brand.slug}>
                {brand.title}
              </Link>
            ))}
          </div>
        </div>

        {/* <Link to="/about">About</Link>  */}
        <Link to="/franchise">Franchise</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
}
