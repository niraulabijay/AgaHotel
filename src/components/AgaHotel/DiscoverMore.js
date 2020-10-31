import React from "react";

function DiscoverMore() {
  return (
    <>
      <div className="aga-discover">
        <div className="header">Discover More.</div>

        <div className="dis-container">
          <div className="discover-content">
            <div className="img-container">
              <img
                className="img-fluid"
                src={require("../../assets/images/spa.jpg")}
                alt=""
              />
            </div>
            <div className="text">Spa</div>
            <div className="overlay-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              pariatur assumenda nobis voluptatum deserunt sint error
              voluptates!
            </div>
            <div className="overlay-color"></div>
          </div>

          <div className="discover-content">
            <div className="img-container">
              <img
                className="img-fluid"
                src={require("../../assets/images/swimmingpool.jpg")}
                alt=""
              />
            </div>
            <div className="text">Swimming Pool</div>
            <div className="overlay-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              pariatur assumenda nobis voluptatum deserunt sint error
              voluptates!
            </div>
            <div className="overlay-color"></div>
          </div>

          <div className="discover-content">
            <div className="img-container">
              <img
                className="img-fluid"
                src={require("../../assets/images/gym1.jpg")}
                alt=""
              />
            </div>
            <div className="text">Indoor Gym</div>
            <div className="overlay-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              pariatur assumenda nobis voluptatum deserunt sint error
              voluptates!
            </div>
            <div className="overlay-color"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DiscoverMore;
