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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                  porro vel officiis repudiandae id, voluptates dolorum eos at a
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                  porro vel officiis repudiandae id, voluptates dolorum eos at a
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
