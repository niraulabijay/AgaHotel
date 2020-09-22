import React from 'react'
import Slider from 'react-slick';

export default function Designed() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
			  slidesToScroll: 1,
			  arrows: false
            }
          }
        ]
  
      };
    return (
        <>
               	<div className="designed-section">
					<div className="container">
						<div className="designed-title">Designed For You</div>
						<div className="design-slider-wrapper">
                        <Slider {...settings}>
							<div>
								<div className="designed-item">
									<div className="img-container">
										<img src={require('../../assets/images/slider 1.png')} alt="" />
									</div>
									<div className="title">Refreshing Bath</div>
									<div className="description">
										Retreat to your personal sanctuary to unwind and recharge.
										Revive your sense of well-being with our essential bath
										amenities.
									</div>
								</div>
							</div>
							<div>
								<div className="designed-item">
									<div className="img-container">
										<img src={require('../../assets/images/slider 2.png')} alt="" />
									</div>
									<div className="title">Sleep Experience</div>
									<div className="description">
										Retreat to your personal sanctuary to unwind and recharge.
										Revive your sense of well-being with our essential bath
										amenities.
									</div>
								</div>
							</div>
							<div>
								<div className="designed-item">
									<div className="img-container">
										<img src={require('../../assets/images/slider 3.png')} alt="" />
									</div>
									<div className="title">Inspired Workouts</div>
									<div className="description">
										Retreat to your personal sanctuary to unwind and recharge.
										Revive your sense of well-being with our essential bath
										amenities.
									</div>
								</div>
							</div>
							<div>
								<div className="designed-item">
									<div className="img-container">
										<img src={require('../../assets/images/slider 4.png')} alt="" />
									</div>
									<div className="title">Balanced Breakfast</div>
									<div className="description">
										Retreat to your personal sanctuary to unwind and recharge.
										Revive your sense of well-being with our essential bath
										amenities.
									</div>
								</div>
							</div>
							<div>
								<div className="designed-item">
									<div className="img-container">
										<img src={require('../../assets/images/slider 3.png')} alt="" />
									</div>
									<div className="title">Inspired Workouts</div>
									<div className="description">
										Retreat to your personal sanctuary to unwind and recharge.
										Revive your sense of well-being with our essential bath
										amenities.
									</div>
								</div>
							</div>
						</Slider>
                        </div>
					</div>
				</div>
   
        </>
    )
}
