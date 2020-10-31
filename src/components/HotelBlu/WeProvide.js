import React from "react";
import Slider from "react-slick";

export default function WeProvide({services}) {
    console.log(services)
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
            {services.map((service, index) => 
              <div>
                <div className="item">
                  <div className="title">{service.title}</div>
                  <span></span>
                  <div className="description">
                   {service.description}
                  </div>
                  <div className="img-container">
                    <img
                      className="img-fluid"
                      src={service.image}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
