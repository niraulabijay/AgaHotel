import React from 'react'
import { Link } from 'react-router-dom'
import HotelFilter from '../components/hotel/HotelFilter'
import SearchNavbar from '../components/SearchNavbar'

export default function Hotel() {
	function openHotelNav(e) {
		e.preventDefault();
		document.getElementById("filterSidenav").style.width = "250px";
	}
	
	function closeHotelNav() {
		document.getElementById("filterSidenav").style.width = "0";
	}
    return (
        <>
           <SearchNavbar /> 
           <div className="content">
				<div className="hotel-filter-page">
					<div className="container">
						<div className="top-title">
							<span>56</span> Hotels found in Los Angeles.
						</div>
						<div className="filter">
							<a
								href=""
								className="closebtn"
								onclick={openHotelNav}
							>
								<i className="fa fa-filter"></i> Filter
							</a>
						</div>
						<div className="row">
							<div className=" col-lg-4 col-xl-3">
								<HotelFilter />
							</div>
							<div className="col-lg-8 col-xl-9">
								<div className="hotel-item">
									<div className="d-flex justify-content-space-between">
										<div className="hotel-name-wrapper">
											<div className="hotel-name">
												Park Plaza Bridge (Hotel 1)
											</div>
											<div className="sub-hotel-name">
												<address>
													<i className="fas fa-map-marker-alt"></i>
													Brooklyn, NY 11215, United States
												</address>
											</div>
										</div>
										<div className="hotel-logo">
											<img
												src={require('../assets/images/logo1.png')}
												className="img-fluid"
												alt=""
											/>
										</div>
									</div>
									<div className="row">
										<div className="col-xl-10">
											<div className="row">
												<div className="col-md-7">
													<div className="img-container">
														<img
															src={require('../assets/images/b.jpg')}
															className="img-fluid"
															alt=""
														/>
													</div>
												</div>
												<div className="col-md-5">
													<div className="description">
														Lorem ipsum dolor sit amet consectetur adipisicing elit.Labore ut rerum, tempora officiis ...
													</div>
													<div className="readmore-btn">
														<a href=""
															>Read More <i className="fa fa-caret-down"></i
														></a>
													</div>
												</div>
											</div>
										</div>

										<div className="col-xl-2 price-wrapper-container">
											<div className="price-wrapper">
												<div className="main-price">USD <strike>86.45</strike></div>
												<div className="offer-price-container">
													<div className="offer-price">
														USD 58.83
													</div>
													<div className="tenure">
														per night
													</div>
												</div>
												
											</div>
											<div className="view-btn">
												<Link to="/room">View Rooms </Link>
											</div>
										</div>
									</div>
								</div>
								
                                <div className="hotel-item">
									<div className="d-flex justify-content-space-between">
										<div className="hotel-name-wrapper">
											<div className="hotel-name">
												Park Plaza Bridge (Hotel 1)
											</div>
											<div className="sub-hotel-name">
												<address>
													<i className="fas fa-map-marker-alt"></i>
													Brooklyn, NY 11215, United States
												</address>
											</div>
										</div>
										<div className="hotel-logo">
											<img
												src={require('../assets/images/logo1.png')}
												className="img-fluid"
												alt=""
											/>
										</div>
									</div>
									<div className="row">
										<div className="col-xl-10">
											<div className="row">
												<div className="col-md-7">
													<div className="img-container">
														<img
															src={require('../assets/images/b.jpg')}
															className="img-fluid"
															alt=""
														/>
													</div>
												</div>
												<div className="col-md-5">
													<div className="description">
														Lorem ipsum dolor sit amet consectetur adipisicing elit.
														Labore ut rerum, tempora officiis ...
													</div>
													<div className="readmore-btn">
														<a href=""
															>Read More <i className="fa fa-caret-down"></i
														></a>
													</div>
												</div>
											</div>
										</div>

										<div className="col-xl-2 price-wrapper-container">
											<div className="price-wrapper">
												<div className="main-price">USD <strike>86.45</strike></div>
												<div className="offer-price-container">
													<div className="offer-price">
														USD 58.83
													</div>
													<div className="tenure">
														per night
													</div>
												</div>
												
											</div>
											<div className="view-btn">
												<Link to="/room">View Rooms </Link>
											</div>
										</div>
									</div>
								</div>
								<div className="hotel-item">
									<div className="d-flex justify-content-space-between">
										<div className="hotel-name-wrapper">
											<div className="hotel-name">
												Park Plaza Bridge (Hotel 1)
											</div>
											<div className="sub-hotel-name">
												<address>
													<i className="fas fa-map-marker-alt"></i>
													Brooklyn, NY 11215, United States
												</address>
											</div>
										</div>
										<div className="hotel-logo">
											<img
												src={require('../assets/images/logo1.png')}
												className="img-fluid"
												alt=""
											/>
										</div>
									</div>
									<div className="row">
										<div className="col-xl-10">
											<div className="row">
												<div className="col-md-7">
													<div className="img-container">
														<img
															src={require('../assets/images/b.jpg')}
															className="img-fluid"
															alt=""
														/>
													</div>
												</div>
												<div className="col-md-5">
													<div className="description">
														Lorem ipsum dolor sit amet consectetur adipisicing elit.
														Labore ut rerum, tempora officiis ...
													</div>
													<div className="readmore-btn">
														<a href=""
															>Read More <i className="fa fa-caret-down"></i
														></a>
													</div>
												</div>
											</div>
										</div>

										<div className="col-xl-2 price-wrapper-container">
											<div className="price-wrapper">
												<div className="main-price">USD <strike>86.45</strike></div>
												<div className="offer-price-container">
													<div className="offer-price">
														USD 58.83
													</div>
													<div className="tenure">
														per night
													</div>
												</div>
												
											</div>
											<div className="view-btn">
												<Link to="/room">View Rooms </Link>
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
							<div className="title">
								Contact Aga Hotels
							</div>
							<div className="button-container">
								<a href="" className="mybtn">Need Help?</a>
							</div>
						</div>
					</div>
				</div>
			</div>
        </>
    )
}
