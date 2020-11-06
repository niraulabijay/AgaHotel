import React from 'react'

export default function Welcome() {
    return (
        <>
            	<div className="welcome">
					<div className="container">
						<div className="row">
							<div className="col-md-4 offset-md-1 d-none d-md-block">
								<div className="img-container">
									<img src={require('../../assets/images/a.jpg')} alt="" />
								</div>
							</div>
							<div className="col-md-6">
								<div className="welcome-content">
									<div className="title">Our Heartfelt Thanks</div>
									<div className="description">
									We would like to thank you from the bottom of our heart for choosing AGA Hotels. 
									At AGA Hotels, we put our customer service above everything else. 
									We believe in 100% Customer Satisfaction and help make our customer stay a memorable one. 
									Our Staffs are dedicated to provide you a 5-star service while treating you like a family member.
									Our Staffs are dedicated to provide you a 5-star service while treating you like a family member.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			
        </>
    )
}
