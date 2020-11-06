import React from "react";
import SearchNavbar from "../components/SearchNavbar";

export default function Room() {
	return (
		<>
			<SearchNavbar />
			<div className="room-content">
				<div className="room-filter-page">
					<div className="room-top-bar">
						<div className="container">
							<div className="room-top-bar-wrapper">
								<div className="top-wrapper">
									<div className="top-title">
										Park Plaza Westminister Bridge
									</div>

									<ul>
										<li>
											<i className="fa fa-map-marker-alt"></i> 21 west 21 Jump
											Street, New York
										</li>
										<li>
											<i className="fa fa-phone"></i> +1 402 637847
										</li>
										<li>
											<i className="fa fa-envelope"></i> info@agahotel.com
										</li>
									</ul>
								</div>
								<div className="hotel-logo">
									<img
										src={require("../assets/images/logo1.png")}
										className="img-fluid"
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-lg-4">
								<div className="room-map">
									<div className="main-title">
										<a data-toggle="collapse" data-target="#map">
											Map View
										</a>
									</div>
									<div id="map" className="collapse">
										<iframe
											src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d96775.45996511145!2d-74.07601310178966!3d40.71288425611757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!3m2!1d40.7127753!2d-74.0059728!5e0!3m2!1sen!2snp!4v1598167093305!5m2!1sen!2snp"
											width="100%"
											height="300"
											frameBorder="0"
											style={{border:0}}
											allowFullScreen=""
											aria-hidden="false"
											tabIndex="0"
										></iframe>
									</div>
								</div>
							</div>
							<div className="col-lg-8">
								<div className="room-item">
									<div className="room-type">Normal Room</div>
									<div className="row">
										<div className="col-md-5">
											<div className="img-container">
												<img
													src={require("../assets/images/b.jpg")}
													className="img-fluid"
													alt=""
												/>
											</div>
										</div>

										<div className="col-md-7">
											<div className="description">
												Lorem ipsum dolor, sit amet consectetur adipisicing
												elit. doloremque error excepturi in non quibusdam,
												cumque expedita Lorem ipsum dolor sit amet consectetur
												adipisicing elit. Impedit, eaque a aliquam pariatur
												quisquam nemo atque iusto alias dignissimos! Dolorem
												reprehenderit adipisci quibusdam, dolor quae repellat
												similique ...
											</div>
											<div className="readmore-btn">
												<a href="">
													Read More <i className="fa fa-caret-down"></i>
												</a>
											</div>
										</div>
										<div className="col-md-5">
											<div className="amenities-wrapper">
												<ul>
													<li>
														<i className="fa fa-wifi"></i>
													</li>
													<li>
														<i className="fas fa-bread-slice"></i>
													</li>
													<li>
														<i className="fas fa-shower"></i>
													</li>
													<li>
														<i className="fa fa-hot-tub"></i>
													</li>
													<li>
														<i className="fas fa-temperature-low"></i>
													</li>
												</ul>
											</div>
											<div className="other-wrapper">
												<ul>
													<li>
														<i className="fa fa-user"></i> Max Guest: 1
													</li>
													<li>
														<i className="fa fa-bed"></i> Bed Type: Normal
													</li>
												</ul>
											</div>
										</div>
										<div className="col-md-7">
											<div className="bed-item">
												<div className="row">
													<div className="col-7">
														<div className="bed-qty">Queen Bed (1)</div>
														<ul>
															<li>
																<i className="fas fa-check-circle"></i>Free
																Cancellation before July 17, 2020
															</li>
															<li>
																<i className="fas fa-check-circle"></i>Breakfast
																Included
															</li>
														</ul>
													</div>
													<div className="col-5 bed-item-price">
														<div className="price">USD 58.90</div>
														<div className="tenure">per night</div>
														<div className="select-container">
															<a href="">Select</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="room-item">
									<div className="room-type">Normal Room</div>
									<div className="row">
										<div className="col-md-5">
											<div className="img-container">
												<img
													src={require("../assets/images/b.jpg")}
													className="img-fluid"
													alt=""
												/>
											</div>
										</div>

										<div className="col-md-7">
											<div className="description">
												Lorem ipsum dolor, sit amet consectetur adipisicing
												elit. doloremque error excepturi in non quibusdam,
												cumque expedita Lorem ipsum dolor sit amet consectetur
												adipisicing elit. Impedit, eaque a aliquam pariatur
												quisquam nemo atque iusto alias dignissimos! Dolorem
												reprehenderit adipisci quibusdam, dolor quae repellat
												similique ...
											</div>
											<div className="readmore-btn">
												<a href="">
													Read More <i className="fa fa-caret-down"></i>
												</a>
											</div>
										</div>
										<div className="col-md-5">
											<div className="amenities-wrapper">
												<ul>
													<li>
														<i className="fa fa-wifi"></i>
													</li>
													<li>
														<i className="fas fa-bread-slice"></i>
													</li>
													<li>
														<i className="fas fa-shower"></i>
													</li>
													<li>
														<i className="fa fa-hot-tub"></i>
													</li>
													<li>
														<i className="fas fa-temperature-low"></i>
													</li>
												</ul>
											</div>
											<div className="other-wrapper">
												<ul>
													<li>
														<i className="fa fa-user"></i> Max Guest: 1
													</li>
													<li>
														<i className="fa fa-bed"></i> Bed Type: Normal
													</li>
												</ul>
											</div>
										</div>
										<div className="col-md-7">
											<div className="bed-item">
												<div className="row">
													<div className="col-7">
														<div className="bed-qty">Queen Bed (1)</div>
														<ul>
															<li>
																<i className="fas fa-check-circle"></i>Free
																Cancellation before July 17, 2020
															</li>
															<li>
																<i className="fas fa-check-circle"></i>Breakfast
																Included
															</li>
														</ul>
													</div>
													<div className="col-5 bed-item-price">
														<div className="price">USD 58.90</div>
														<div className="tenure">per night</div>
														<div className="select-container">
															<a href="">Select</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="room-item">
									<div className="room-type">Normal Room</div>
									<div className="row">
										<div className="col-md-5">
											<div className="img-container">
												<img
													src={require("../assets/images/b.jpg")}
													className="img-fluid"
													alt=""
												/>
											</div>
										</div>

										<div className="col-md-7">
											<div className="description">
												Lorem ipsum dolor, sit amet consectetur adipisicing
												elit. doloremque error excepturi in non quibusdam,
												cumque expedita Lorem ipsum dolor sit amet consectetur
												adipisicing elit. Impedit, eaque a aliquam pariatur
												quisquam nemo atque iusto alias dignissimos! Dolorem
												reprehenderit adipisci quibusdam, dolor quae repellat
												similique ...
											</div>
											<div className="readmore-btn">
												<a href="">
													Read More <i className="fa fa-caret-down"></i>
												</a>
											</div>
										</div>
										<div className="col-md-5">
											<div className="amenities-wrapper">
												<ul>
													<li>
														<i className="fa fa-wifi"></i>
													</li>
													<li>
														<i className="fas fa-bread-slice"></i>
													</li>
													<li>
														<i className="fas fa-shower"></i>
													</li>
													<li>
														<i className="fa fa-hot-tub"></i>
													</li>
													<li>
														<i className="fas fa-temperature-low"></i>
													</li>
												</ul>
											</div>
											<div className="other-wrapper">
												<ul>
													<li>
														<i className="fa fa-user"></i> Max Guest: 1
													</li>
													<li>
														<i className="fa fa-bed"></i> Bed Type: Normal
													</li>
												</ul>
											</div>
										</div>
										<div className="col-md-7">
											<div className="bed-item">
												<div className="row">
													<div className="col-7">
														<div className="bed-qty">Queen Bed (1)</div>
														<ul>
															<li>
																<i className="fas fa-check-circle"></i>Free
																Cancellation before July 17, 2020
															</li>
															<li>
																<i className="fas fa-check-circle"></i>Breakfast
																Included
															</li>
														</ul>
													</div>
													<div className="col-5 bed-item-price">
														<div className="price">USD 58.90</div>
														<div className="tenure">per night</div>
														<div className="select-container">
															<a href="">Select</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="top-footer">
				<div className="container">
					<div className="item-container">
						<div className="item-wrapper">
							<div className="title">Contact Aga Hotels</div>
							<div className="button-container">
								<a href="" className="mybtn">
									Need Help?
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
