import React from "react";
import Slider from "react-slick";

export default function Room() {
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
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      <div className="room">
        <div className="container">
          <div className="main-title text-center">Rooms</div>
          <div className="row">
            <div className="col-md-3 room-detail">
              <p>
                Lyfe Inn rooms are designed to make sure you feel very
                comfortable and cozy. We use top-grade mattresses, clean and
                high quality bed sheets and very cozy pillows.
              </p>
            </div>
            <div className="col-md-9">
              <div className="room-slider-wrapper">
                <Slider {...settings}>
                  <div>
                    <div className="room-wrapper">
                      <div className="img-container">
                        <img
                          src={require("../../assets/images/room1.jpg")}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="info-wrap">
                        <div className="room-name">
                          <div className="title">Deluxe Double Room</div>
                          {/* <div className="logo-container">
                            <img
                              src={require("../../assets/images/agaLogo.png")}
                              className="img-fluid"
                              alt=""
                            />
                          </div> */}
                        </div>
                        <div className="description">
                          For a comfortable stay, book one of our spacious
                          standard rooms with a king bed and a trundle bed. Walk
                          out onto the balcony to take in views of the tropical
                          gardens, or relax in the cool air-conditioning while
                          you enjoy free Wi-Fi
                        </div>
                        <div className="price-wrap">
                          <span>Price</span>
                          <span className="price">
                            $79<sup>*</sup>
                          </span>
                        </div>
                        <div className="book-btn">
                          <a href="">Book</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="room-wrapper">
                      <div className="img-container">
                        <img
                          src={require("../../assets/images/IMG-8426.jpg")}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="info-wrap">
                        <div className="room-name">
                          <div className="title">Deluxe King Room</div>
                        </div>
                        <div className="description">
                          Our spacious Deluxe King Room features a king bed, a
                          trundle bed, and a private balcony with a view of the
                          hotel’s sparkling lagoon pools.
                        </div>
                        <div className="price-wrap">
                          <span>Price</span>
                          <span className="price">
                            $79<sup>*</sup>
                          </span>
                        </div>
                        <div className="book-btn">
                          <a href="">Book</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="room-wrapper">
                      <div className="img-container">
                        <img
                          src={require("../../assets/images/room2.jpg")}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="info-wrap">
                        <div className="room-name">
                          <div className="title">Deluxe Queen Room</div>
                        </div>
                        <div className="description">
                          Our spacious Deluxe Queen Room features a queen bed, a
                          trundle bed, and a private balcony with a view of the
                          hotel’s sparkling lagoon pools.
                        </div>
                        <div className="price-wrap">
                          <span>Price</span>
                          <span className="price">
                            $79<sup>*</sup>
                          </span>
                        </div>
                        <div className="book-btn">
                          <a href="">Book</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="room-wrapper">
                      <div className="img-container">
                        <img
                          src={require("../../assets/images/IMG-8426.jpg")}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="info-wrap">
                        <div className="room-name">
                          <div className="title">Royal Suite</div>
                        </div>
                        <div className="description">
                          Planning an extended holiday or want a little extra
                          space? Choose this air-conditioned suite with a king
                          bed and a separate living room with a sleeper sofa.
                        </div>
                        <div className="price-wrap">
                          <span>Price</span>
                          <span className="price">
                            $79<sup>*</sup>
                          </span>
                        </div>
                        <div className="book-btn">
                          <a href="">Book</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
