import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Axios from "axios";
import axiosInstance from "../../helpers/axios";

export default function Room({ hotelbrand }) {
  console.log(hotelbrand);
  const [room, setRoom] = useState([]);
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

  useEffect(() => {
    let source = Axios.CancelToken.source();
    const loadData = async () => {
      try {
        const response = axiosInstance.get(`/brand/rooms/${hotelbrand}`, {
          cancelToken: source.token,
        });
        setRoom((await response).data.roomTypes);
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

  room.map((r) => {
    console.log(r.featureImage);
  });

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
                  {room &&
                    room.map((r) => (
                      <div>
                        <div className="room-wrapper">
                          <div
                            className="img-container"
                            style={{
                              backgroundImage: `url(${r.featureImage})`,
                            }}
                          ></div>
                          <div className="info-wrap">
                            <div className="room-name">
                              <div className="title">{r.title}</div>
                            </div>
                            <div className="description">{r.description}</div>
                            <div className="price-wrap">
                              <span>Price</span>
                              <span className="price">
                                ${r.price}
                                <sup>*</sup>
                              </span>
                            </div>
                            <div className="book-btn">
                              <a href="">Book</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
