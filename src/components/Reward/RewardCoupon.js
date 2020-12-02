import React from "react";

function RewardCoupon() {
  return (
    <>
      <div className="reward-page">
        <div className="row justify-content-center ">
          <div className="col-md-6">
            <div className="reward_coupon">
              <div class="image-coantainer">
                <img
                  src={require("../../assets/images/sale.jpg")}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="reward_header">
                <div className="header">
                  <h1>Get upto 20% off</h1>
                </div>
                <div className="product-btn">
                  <a href="" data-toggle="modal" data-target="#top_btn">
                    Get Deal <i className="fas fa-greater-than"></i>
                  </a>
                </div>
              </div>

              <div className="details">
                <h2>Black Friday Deals</h2>
                <div className="line">|</div>
                <h2>Upto Jul 28, 2020</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="top_btn"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal_header">
                <div className="text">Aga Hotel</div>
                <div className="para">
                  Sign up to our newsletter and we'll give you 20% offnext time
                  you join with us
                </div>
              </div>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <div className="modal_btn">
                <a href="">
                  <span>Get Coupon</span>
                  <i className="far fa-paper-plane"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RewardCoupon;
