import React from "react";
import Slider from "react-slick";

export default function WeProvide() {
 
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },

        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  return (
    <>
      <div className="aga-provide">
        <div className="container">
          <div className="main-title">We Provide</div>
          <div className="welcome-slider-wrapper">
            <Slider {...settings}>
              <div>
                <div className="item">
                  <div className="title">Free Wifi</div>
                  <span></span>
                  <div className="description">
                    Retreat to your personal sanctuary to unwind and recharge.
                    Revive your sense of well-being with our essential bath
                    amenities.
                  </div>
                  <div className="img-container">
                    <img
                      className="img-fluid"
                      src={require("../../assets/images/freewifi.jpg")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="item">
                  <div className="title">Free Parking</div>
                  <span></span>
                  <div className="description">
                    Retreat to your personal sanctuary to unwind and recharge.
                    Revive your sense of well-being with our essential bath
                    amenities.
                  </div>
                  <div className="img-container">
                    <img
                      className="img-fluid"
                      src={require("../../assets/images/c.jpg")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="item">
                  <div className="title">AC Room</div>
                  <span></span>
                  <div className="description">
                    Retreat to your personal sanctuary to unwind and recharge.
                    Revive your sense of well-being with our essential bath
                    amenities.
                  </div>
                  <div className="img-container">
                    <img
                      className="img-fluid"
                      src={require("../../assets/images/b.jpg")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="item">
                  <div className="title">View Tower</div>
                  <span></span>
                  <div className="description">
                    Retreat to your personal sanctuary to unwind and recharge.
                    Revive your sense of well-being with our essential bath
                    amenities.
                  </div>
                  <div className="img-container">
                    <img
                      className="img-fluid"
                      src={require("../../assets/images/e.jpg")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="item">
                  <div className="title">Swimming Pool</div>
                  <span></span>
                  <div className="description">
                    Retreat to your personal sanctuary to unwind and recharge.
                    Revive your sense of well-being with our essential bath
                    amenities.
                  </div>
                  <div className="img-container">
                    <img
                      className="img-fluid"
                      src={require("../../assets/images/c.jpg")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
