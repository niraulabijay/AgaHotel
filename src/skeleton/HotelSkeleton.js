import React from "react";
import SkeletonElement from "./SkeletonElement";

function HotelSkeleton() {
  return (
    <div>
      <div className="hotel-item">
        <div className="d-flex justify-content-space-between">
          <div className="hotel-name-wrapper">
            <div className="hotel-name">
              <SkeletonElement type="title" />
            </div>
            <div className="sub-hotel-name">
              <address></address>
            </div>
          </div>
          <div className="">
            <SkeletonElement type="logo" />
          </div>
        </div>
        <div className="row">
          <div className="col-xl-10">
            <div className="row">
              <div className="col-md-7">
                <div className="">
                  <SkeletonElement type="image" />
                </div>
              </div>
              <div className="col-md-5">
                <div className="description"></div>
                <div className="readmore-btn">
                  <a href=""></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-2 price-wrapper-container">
            <div className="price-wrapper">
              <div className="main-price"></div>
              <div className="offer-price-container">
                <div className="offer-price"></div>
                <div className="tenure"></div>
              </div>
            </div>
            <div className="view-btn">
              <SkeletonElement type="btn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelSkeleton;
