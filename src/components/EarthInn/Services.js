import React from "react";

function Services() {
  return (
    <>
      <div className="earthinn-services">
        <div className="header">Services</div>
        <div className="sub-header">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          pariatur assumenda nobis voluptatum deserunt sint error voluptates.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          pariatur assumenda nobis voluptatum deserunt sint error voluptates!
        </div>

        <div className="dis-container">
          <div className="discover-content">
            <div className="img-container">
              <img
                className="img-fluid"
                src={require("../../assets/images/gym1.jpg")}
                alt=""
              />
            </div>
            <div className="text">Catering</div>
            <div className="overlay-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              pariatur assumenda nobis voluptatum deserunt sint error
              voluptates!
            </div>
            {/* <div className="overlay-color"></div> */}
          </div>
          <div className="discover-content">
            <div className="img-container">
              <img
                className="img-fluid"
                src={require("../../assets/images/breakfast.jpg")}
                alt=""
              />
            </div>
            <div className="text">Breakfast in Bed</div>
            <div className="overlay-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              pariatur assumenda nobis voluptatum deserunt sint error
              voluptates!
            </div>
            {/* <div className="overlay-color"></div> */}
          </div>

          <div className="discover-content">
            <div className="img-container">
              <img
                className="img-fluid"
                src={require("../../assets/images/roomclean.jpg")}
                alt=""
              />
            </div>
            <div className="text">Dry Cleaning</div>
            <div className="overlay-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              pariatur assumenda nobis voluptatum deserunt sint error
              voluptates!
            </div>
            {/* <div className="overlay-color"></div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
