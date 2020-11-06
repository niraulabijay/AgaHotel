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
									<div className="title">Proximity</div>
									<div className="description">
									We are very close to some of the famous destinations like Hollywood, Disneyland, Beaches, Restaurants and Museums. 
									You and your family can easily visit multiple locations in a day.
									</div>
								</div>
							</div>
							<div>
								<div className="designed-item">
									<div className="img-container">
										<img src={require('../../assets/images/slider 2.png')} alt="" />
									</div>
									<div className="title">Bedrooms</div>
									<div className="description">
									We have the most clean and comfortable bedrooms for you. 
									We pride ourselves in selecting high quality mattresses, comfortable bed sheets 
									and cozy pillows so you can have a very restful sleep.
									</div>
								</div>
							</div>
							<div>
								<div className="designed-item">
									<div className="img-container">
										<img src={require('../../assets/images/slider 3.png')} alt="" />
									</div>
									<div className="title">Workout Area</div>
									<div className="description">
									You don’t have to compromise your fitness during your stay at AGA Hotels. 
									We have a well-equipped fitness hall where you can enjoy your exercises.
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
									We take care of the most important meal of the day for you. 
									Our chef creates our breakfast menu in a way that you can have a delicious and a healthy meal.
									</div>
								</div>
							</div>
							<div>
								<div className="designed-item">
									<div className="img-container">
										<img src={require('../../assets/images/slider 3.png')} alt="" />
									</div>
									<div className="title">Swimming Pool</div>
									<div className="description">
									Have a relaxing day by enjoying the warm weather of California in our pool area. 
									It is a perfect place for you and your family to enjoy your stay at AGA Hotels.
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
