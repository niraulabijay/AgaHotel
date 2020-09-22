import React from "react";
import Slider from "react-slick";

export default function BrandWelcome() {
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
			<div className="welcome-brand">
				<div className="container">
					<div className="main-title">Welcome</div>
					<div className="sub-title">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
						suscipit temporibus nam excepturi voluptates. Amet ad elig
					</div>
					<div className="welcome-slider-wrapper">
						<Slider {...settings}>
							<div>
								<div className="item">
									<div className="title">Free Wifi</div>
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
