import React from "react";
import Slider from "react-slick";

export default function Location() {
  return (
    <>
      <div class="location-container">
        <div class="header">Our Locations</div>
        <div class="brand-location">
          <Slider>
            <div class="slider">
              <div class="row">
                <div class="col-sm-6">
                  <div class="img-container"></div>
                </div>
                <div class="col-sm-6">
                  <div class="text-container">
                    <div>1673 Lakewood Drive</div>
                    <div>North Bergen</div>
                    <div>NJ</div>
                    <div>New Jersey</div>
                    <div>07047</div>
                    <div>201-854-9392</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slider">
              <div class="row">
                <div class="col-sm-6">
                  <div class="img-container"></div>
                </div>
                <div class="col-sm-6">
                  <div class="text-container">
                    <div>1673 Lakewood Drive</div>
                    <div>North Bergen</div>
                    <div>NJ</div>
                    <div>New Jersey</div>
                    <div>07047</div>
                    <div>201-854-9392</div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
