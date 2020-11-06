import React from "react";

function WhereTo() {
  return (
    <>
      <div className="container">
        <div
          className="bottom-search-bar-mobile d-flex d-lg-none"
          data-toggle="modal"
          data-target="#myModal"
        >
          <span>Where to</span>
          <span>
            <i className="fa fa-ellipsis-v"></i>
          </span>
        </div>
        	<div className="modal" id="myModal">
							<div className="modal-dialog">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title">Where to</h5>
										<button type="button" className="close" data-dismiss="modal">
											&times;
										</button>
									</div>

									<div className="modal-body">
										<div className="bottom-search-bar">
											<div className="item">
												<span><i className="fa fa-search"></i></span>
												<input type="text" placeholder="Los Angeles" />
											<div className="item-sup">
												Destination
											</div>
										</div>
										<div className="item">				
											<div className="mobile-checkdate">
												<span><i className="fa fa-calendar"></i></span>
												<input type="date" placeholder="Find a Hotel" />
												<input type="date" placeholder="Find a Hotel" />
											</div>
											<div className="item-sup" id="mobile-check-title">
												<div className="row">
													<div className="col-6">
														Check-in 
													</div>
													<div className="col-6">
														Check-out
													</div>	
												</div>
											</div>
										</div>
										<div className="item">
											<span><i className="fas fa-users"></i></span>
											<input type="text" placeholder="1 Room 1 Adult" />
											<div className="item-sup">
												Occupancy
											</div>
										</div>
								
										<div className="button-container">
											<button>
												Search
											</button>
										</div>
										</div>
									</div>
								</div>
							</div>
						</div>
      </div>
    </>
  );
}

export default WhereTo;
