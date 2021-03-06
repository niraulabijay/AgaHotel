import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import HotelFilter from "../components/hotel/HotelFilter";
import SearchNavbar from "../components/SearchNavbar";
import HotelItem from "../components/hotel/HotelItem";
import axiosInstance from "../helpers/axios";
import Axios from "axios";

export default function Hotel() {
  let param = useParams();
  const [hotel, setHotel] = useState();
  const [allhotel, setAllHotel] = useState();
  const scrollTop = () => {
    window.scrollTo(0, 0);
    document.getElementById("mySidenav").style.width = "0";
  };
  useEffect(() => {
    scrollTop();
    let source = Axios.CancelToken.source();
    const loadData = async () => {
      try {
        const response = axiosInstance.get(`/hotels/${param.destination_id}`, {
          cancelToken: source.token,
        });

        const response2 = axiosInstance.get(`/hotels/filter_with_all/${param.destination_id}`, {
          cancelToken: source.token,
        });
        // console.log((await response).data);
        // setLogo((await response).data.brand.logo)

        setHotel((await response).data.hotels);
        setAllHotel((await response2).data.hotels);

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
  }, [param.destination_id]);


  function openHotelNav(e) {
    e.preventDefault();
    document.getElementById("filterSidenav").style.width = "250px";
  }

 
  console.log(allhotel)
  console.log(hotel)
  return (
    <>
      <SearchNavbar />
      <div className="content">
        <div className="hotel-filter-page">
          <div className="container">
            {/* <div className="top-title">
              <span>56</span> Hotels found in Los Angeles.
            </div> */}
            <div className="filter">
              <a href="" className="closebtn" onClick={openHotelNav}>
                <i className="fa fa-filter"></i> Filter
              </a>
            </div>
            <div className="row">
              <div className=" col-lg-4 col-xl-3">
                <HotelFilter />
              </div>
              <div className="col-lg-8 col-xl-9">
                <HotelItem props={hotel} />

                <HotelItem props={allhotel} />
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
                <Link to="/contact" className="mybtn">
                  Need Help?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
