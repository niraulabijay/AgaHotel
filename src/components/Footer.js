import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
           
				<div className="footer">
					<div className="container">
						<div className="subscribe-container">
							<div className="item-wrapper">
								<div className="title">
									Never miss out on our most popular deals
								</div>
								<form action="">
									<input type="text" placeholder="Your Email" />

									<a href="" className="mybtn">
										Subscribe
									</a>
								</form>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-2 col-md-2">
								<div className="title">Quick Links</div>
								<ul>
									<li>
										<a href="">Best Online Rate Guranteed</a>
									</li>
									<li>
										<a href="">Covid-19 update</a>
									</li>
									<li>
										<a href="">Destination</a>
									</li>
									<li>
										<a href="">Gift cards</a>
									</li>
									<li>
										<a href="">New and Upcomming hotels</a>
									</li>
									<li>
										<a href="">Aga Hotels App</a>
									</li>
									<li>
										<a href="">Responsible Business</a>
									</li>
								</ul>
							</div>

							<div className="col-md-2 col-lg-2">
								<div className="title">Brands</div>
								<ul>
									<li>
										<Link to="/brand/aga-hotel">Aga Hotels</Link>
									</li>
									<li>
										<Link to="/brand/lyfe-inn">Lyfe Inn</Link>
									</li>
									<li>
										<Link to="/brand/hotel-blu">Hotel Blu</Link>
									</li>
									<li>
										<Link to="/brand/erth-inn">Earth Inn</Link>
									</li>
								</ul>
							</div>
							<div className="col-md-2">
								<div className="title">Corporate</div>
								<ul>
									<li>
										<a href="">Careers PPHE</a>
									</li>
									<li>
										<a href="">Careers RHG</a>
									</li>
									<li>
										<a href="">Development Opportunities</a>
									</li>
								</ul>
							</div>
							<div className="col-md-2">
								<div className="title">Legal</div>
								<ul>
									<li>
										<a href="">Ad and Cookie policy</a>
									</li>
									<li>
										<a href="">Digital Millennium copyright Act</a>
									</li>
									<li>
										<a href="">Legal notice</a>
									</li>
									<li>
										<a href="">Privacy Policy</a>
									</li>
									<li>
										<a href="">Site usage agreement</a>
									</li>
								</ul>
							</div>
							<div className="col-md-2">
								<div className="title">Help</div>
								<ul>
									<li>
										<a href="">Consumer alerts</a>
									</li>
									<li>
										<a href="">Contact</a>
									</li>
									<li>
										<a href="">FAQ</a>
									</li>
									<li>
										<a href="">Sitemap</a>
									</li>
								</ul>
							</div>
							<div className="col-md-2">
								<div className="title">Follow us on Social Media</div>
								<ul className="social-link">
									<li>
										<a href="">
											<i className="fab fa-facebook"></i>
										</a>
									</li>
									<li>
										<a href="">
											<i className="fab fa-pinterest"></i>
										</a>
									</li>
									<li>
										<a href="">
											<i className="fab fa-twitter"></i>
										</a>
									</li>
									<li>
										<a href="">
											<i className="fab fa-instagram"></i>
										</a>
									</li>
									<li>
										<a href="">
											<i className="fab fa-linkedin"></i>
										</a>
									</li>
									<li>
										<a href="">
											<i className="fab fa-youtube"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="copyright-container">
							<strong>&copy; 2020 AGA Hotel Group </strong> All right reserved.
						</div>
					</div>
				</div>
			 
        </>
    )
}
