import React from "react";
import { Link } from "react-router-dom";
import HotelFilter from "../components/hotel/HotelFilter";
import SearchNavbar from "../components/SearchNavbar";
import HotelItem from "../components/hotel/HotelItem";

export default function Hotel() {
  function openHotelNav(e) {
    e.preventDefault();
    document.getElementById("filterSidenav").style.width = "250px";
  }

  function closeHotelNav() {
    document.getElementById("filterSidenav").style.width = "0";
  }
  return (
    <>
      <SearchNavbar />
      <div className="content">
        <div className="hotel-filter-page">
          <div className="container">
            <div className="top-title">
              <span>56</span> Hotels found in Los Angeles.
            </div>
            <div className="filter">
              <a href="" className="closebtn" onclick={openHotelNav}>
                <i className="fa fa-filter"></i> Filter
              </a>
            </div>
            <div className="row">
              <div className=" col-lg-4 col-xl-3">
                <HotelFilter />
              </div>
              <div className="col-lg-8 col-xl-9">
                <HotelItem />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="top-footer">
        <div className="container">
          <div className="item-container">
            <div className="item-wrapper">
              <div className="title">Contact Aga Hotels</div>
              <div className="button-container">
                <a href="" className="mybtn">
                  Need Help?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
