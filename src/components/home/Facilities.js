import React from "react";

export default function Facilities() {
	return (
		<>
			<div className="facilities-section">
				<div className="container-fluid">
					<div className="facilities-title">Other Facilities</div>

					<div className="row">
						<div className="col-md-1"></div>
						<div className="col-md-3">
							<div className="thumbnail-wrapper">
								<div className="row">
									<div className="col-6">
										<div className="welcome-thumbnails">
											<span>
												<i className="fa fa-thumbs-up"></i>
											</span>
											<div className="thumbnail-title">Best Online Rate</div>
										</div>
									</div>
									<div className="col-6">
										<div className="welcome-thumbnails">
											<span>
												<i className="fa fa-bed"></i>
											</span>
											<div className="thumbnail-title">Earn free Nights</div>
										</div>
									</div>
									<div className="col-6">
										<div className="welcome-thumbnails">
											<span>
												<i className="fa fa-tag"></i>
											</span>
											<div className="thumbnail-title">Where to go Next</div>
										</div>
									</div>
									<div className="col-6">
										<div className="welcome-thumbnails">
											<span>
												<i className="fa fa-gift"></i>
											</span>
											<div className="thumbnail-title">Offers & Deals</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="description">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
								quod saepe laborum explicabo magni, commodi officia, magnam odit
								provident quam, quae aliquid minus? Ipsam architecto consequatur
								vel ullam sunt quo. Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Culpa quod saepe laborum explicabo magni,
								commodi officia, magnam odit provident quam, quae aliquid minus?
								Ipsam architecto consequatur vel ullam sunt quo.
							</div>
						</div>
						<div className="col-md-4">
							<div className="img-container">
								<img src={require("../../assets/images/d.jpg")} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bottom-image">
				<img
					src={require("../../assets/images/bottom baner.png")}
					className="img-fluid"
					alt=""
				/>
			</div>
		</>
	);
}
