import React from "react";

function Welcome() {
  return (
    <>
      <div class="earthinn-welcome">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-1">
              <div class="text-container">
                <div class="header">Welcome</div>
                <div className="line"></div>
                <div class="text">
                We welcome  you to the friendly neighborhood hotel Earth Inn. 
                We provide you with very clean and comfortable rooms and make sure you get the best customer service. 
                We believe in providing a 5-star service at an affordable price.
                </div>
                <div class="welcome-list">
                  <ul>
                    <li>
                      <i class="fas fa-bed"></i> Upgraded spaces
                    </li>
                    <li>
                      <i class="fas fa-wifi"></i> Free Wi-Fi
                    </li>
                    <li>
                      <i class="fas fa-utensils"></i>Healthy Breakfast
                    </li>
                    <li>
                      <i class="fas fa-dumbbell"></i> Modern Fitness Centers
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-5  d-none d-lg-block">
              <div class="img-container">
                <img
                  class="img-fluid"
                  src={require("../../assets/images/WELCOME SECTION.jpg")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
