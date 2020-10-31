import React from 'react'
import {Link} from 'react-router-dom'

export default function BrandSection() {
    return (
        <>
         <div className="brands">
					<div className="main-title">Our Brands</div>
					<div className="stars">
						<span>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
						</span>
					</div>
					<div className="brand-list">
						<div className="container">
							<div className="row">
								<div className="col-lg-3 col-6">
									<a href="" className="brand-img">
										<img src={require("../../assets/images/AGA logo.png")} alt="" />
									</a>
								</div>
								<div className="col-lg-3 col-6">
									<Link to="/lifeinn" className="brand-img">
										<img src={require('../../assets/images/LYF INN.png')} alt="" />
									</Link>
								</div>
								<div className="col-lg-3 col-6">
									<a href="" className="brand-img">
										<img src={require('../../assets/images/BLUE.png')} alt="" />
									</a>
								</div>
								<div className="col-lg-3 col-6">
									<a href="" className="brand-img">
										<img src={require('../../assets/images/ERTH INN.png')} alt="" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				   
        </>
    )
}
