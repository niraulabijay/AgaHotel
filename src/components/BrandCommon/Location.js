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
                    <div>3642 Slauson</div>
                    <div>Ave Maywood,</div>
                    <div>CA 90270</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slider">
              <div class="row">
                <div class="col-sm-6">
                  <div class="img-container location-image2"></div>
                </div>
                <div class="col-sm-6">
                  <div class="text-container">
                    <div>2050 Marengo St.</div>
                    <div> Los Angeles,</div>
                    <div>CA 90033</div>
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
