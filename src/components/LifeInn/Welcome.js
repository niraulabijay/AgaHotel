import React from "react";

function Welcome() {
  return (
    <>
      <div class="lyfeinn-welcome">
        <div class="row">
          <div class="col-md-1"></div>
          <div class="col-md-4">
            <div class="img-container">
              <img
                class="img-fluid"
                src={require("../../assets/images/WELCOME SECTION.jpg")}
                alt=""
              />
            </div>
          </div>
          <div class="col-md-7">
            <div class="text-container">
              <div class="header">Welcome</div>
              <div class="text">
              We welcome you to very comfortable Lyfe Inn hotels where you will receive
              excellent customer service and make your stay memorable.
              </div>
              <div class="welcome-list">
                <ul>
                  <li>
                    <i class="fas fa-wifi"></i> Free wifi and tech-friendly
                    rooms
                  </li>
                  <li>
                    <i class="fas fa-glass-martini-alt"></i> Bars that feature a
                    curated selection of local craft beers
                  </li>
                  <li>
                    <i class="fas fa-utensils"></i>Menus that capture the local
                    flavor
                  </li>
                  <li>
                    <i class="fas fa-tv"></i> Stylish meeting and event rooms
                  </li>
                  <li>
                    <i class="fas fa-spa"></i> Spa-inspired bathrooms with luxe
                    bath products, premium linens and our signature Bluetooth®
                    mirrors*
                  </li>
                  <li>
                    <i class="fas fa-dumbbell"></i> State of the art-fitness
                    centers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
