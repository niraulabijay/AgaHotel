import React from 'react'

export default function BrandGallery() {
    return (
        <>
            <div className="gallery">
					<div className="container">
						<div className="main-title">
							The Gallery
						</div>
						<div className="sub-title">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
							molestiae excepturi.
						</div>
						<div className="view-all">
							<a href="">View All</a>
						</div>
						
                        <div className="row no-gutters">
							<div className="col-6 col-md-3">
								<div className="row">
									<div className="col-12">
										<div className="img-container">
											<img
												src={require('../../assets/images/earthinc.jpg')}
												className="img-fluid"
												alt=""
											/>
										</div>
									</div>
									
								</div>
								
								<div className="row">
									<div className="col-12">
										<div className="img-container">
											<img
												src={require('../../assets/images/earthine.jpg')}
												className="img-fluid"
												alt=""
											/>
										</div>
									</div>
									
								</div>
							</div>
							<div className="col-6 col-md-3 gallery-lastimg-md">
								<div className="img-container" id="gallery-col2">
									<img
										src={require('../../assets/images/earthing.jpg')}
										className="img-fluid"
										alt=""
									/>
								</div>
							</div>
							<div className="col-md-6 gallery-lastimg">
								<div className="img-container" id="gallery-col3">
									<img
										src={require('../../assets/images/earthinh.jpg')}
										className="img-fluid"
										alt=""
									/>
								</div>
								<div className="row no-gutters">
									<div className="col-6 col-md-6">
										<div className="img-container">
											<img
												src={require('../../assets/images/earthini.jpg')}
												className="img-fluid"
												alt=""
											/>
										</div>
									</div>
									<div className="col-6 col-md-6 gallery-lastimg">
										<div className="img-container">
											<img
												src={require('../../assets/images/earthinf.jpg')}
												className="img-fluid"
												alt=""
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
        </>
    )
}
