import React from "react";
import { Link } from "react-router-dom";

function HotelItem() {
  return (
    <>
      <div className="hotel-item">
        <div className="d-flex justify-content-space-between">
          <div className="hotel-name-wrapper">
            <div className="hotel-name">Park Plaza Bridge (Hotel 1)</div>
            <div className="sub-hotel-name">
              <address>
                <i className="fas fa-map-marker-alt"></i>
                Brooklyn, NY 11215, United States
              </address>
            </div>
          </div>
          <div className="hotel-logo">
            <img
              src={require("../../assets/images/logo1.png")}
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
                    src={require("../../assets/images/b.jpg")}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.Labore
                  ut rerum, tempora officiis ...
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
                USD <strike>86.45</strike>
              </div>
              <div className="offer-price-container">
                <div className="offer-price">USD 58.83</div>
                <div className="tenure">per night</div>
              </div>
            </div>
            <div className="view-btn">
              <Link to="/room">View Rooms </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hotel-item">
        <div className="d-flex justify-content-space-between">
          <div className="hotel-name-wrapper">
            <div className="hotel-name">Park Plaza Bridge (Hotel 1)</div>
            <div className="sub-hotel-name">
              <address>
                <i className="fas fa-map-marker-alt"></i>
                Brooklyn, NY 11215, United States
              </address>
            </div>
          </div>
          <div className="hotel-logo">
            <img
              src={require("../../assets/images/logo1.png")}
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
                    src={require("../../assets/images/b.jpg")}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore ut rerum, tempora officiis ...
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
                USD <strike>86.45</strike>
              </div>
              <div className="offer-price-container">
                <div className="offer-price">USD 58.83</div>
                <div className="tenure">per night</div>
              </div>
            </div>
            <div className="view-btn">
              <Link to="/room">View Rooms </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hotel-item">
        <div className="d-flex justify-content-space-between">
          <div className="hotel-name-wrapper">
            <div className="hotel-name">Park Plaza Bridge (Hotel 1)</div>
            <div className="sub-hotel-name">
              <address>
                <i className="fas fa-map-marker-alt"></i>
                Brooklyn, NY 11215, United States
              </address>
            </div>
          </div>
          <div className="hotel-logo">
            <img
              src={require("../../assets/images/logo1.png")}
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
                    src={require("../../assets/images/b.jpg")}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore ut rerum, tempora officiis ...
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
                USD <strike>86.45</strike>
              </div>
              <div className="offer-price-container">
                <div className="offer-price">USD 58.83</div>
                <div className="tenure">per night</div>
              </div>
            </div>
            <div className="view-btn">
              <Link to="/room">View Rooms </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HotelItem;
