import Axios from "axios";
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../helpers/axios";

function HotelItem({props}) {
  console.log(props)
 
 
  return (
    <>
    {
      props &&
      props.map((hotelItem, index)=>
      <div className="hotel-item" key={index}>
      <div className="d-flex justify-content-space-between">
        <div className="hotel-name-wrapper">
          <div className="hotel-name">{hotelItem.title}</div>
          <div className="sub-hotel-name">
            <address>
              <i className="fas fa-map-marker-alt"></i>
              {hotelItem.destination}
            </address>
          </div>
        </div>
        <div className="hotel-logo">
          <img
            src={hotelItem.brand.logo}
            className="img-fluid"
            alt=""
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xl-10">
          <div className="row">
            <div className="col-md-7">
              <div className="img-container">
                <img
                  src={hotelItem.image}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-5">
              <div className="description">
                {hotelItem.short_description}
              </div>
              <div className="readmore-btn">
                <a href="">
                  Read More <i className="fa fa-caret-down"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-2 price-wrapper-container">
          <div className="price-wrapper">
            <div className="main-price">
              USD <strike>{parseFloat(hotelItem.lowest_price)+10}</strike>
            </div>
            <div className="offer-price-container">
              <div className="offer-price">USD {hotelItem.lowest_price}</div>
              <div className="tenure">per night</div>
            </div>
          </div>
          <div className="view-btn">
            <a href={hotelItem.booking_url}>Book Now </a>
          </div>
        </div>
      </div>
    </div>

      )
    }
   
   
    </>
  );
}

export default HotelItem;
