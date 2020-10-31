import React from "react";

function SupplyComponent() {
  return (
    <>
      <div className="supply">
        <div className="header">Supply</div>
        <div className="sub-header">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          pariatur assumenda nobis voluptatum deserunt sint error voluptates.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          pariatur assumenda nobis voluptatum deserunt sint error voluptates!
        </div>

        <div className="container">
          <div className="dis-container">
            <div className="discover-content">
              <div className="img-container">
                <img
                  className="img-fluid"
                  src={require("../../assets/images/SHAMPOO.jpg")}
                  alt=""
                />
              </div>
              <div className="text">
                <span>Shampoo</span>
                <span>
                  <a>Get Now</a>
                </span>
              </div>
              <div className="overlay-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente pariatur assumenda nobis voluptatum deserunt sint error
                voluptates!
              </div>
              {/* <div className="overlay-color"></div> */}
            </div>
            <div className="discover-content">
              <div className="img-container">
                <img
                  className="img-fluid"
                  src={require("../../assets/images/soap.jpg")}
                  alt=""
                />
              </div>
              <div className="text">
                <span>Soap</span>
                <span>
                  <a>Get Now</a>
                </span>
              </div>
              <div className="overlay-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente pariatur assumenda nobis voluptatum deserunt sint error
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
              <div className="text">
                <span>Towel</span>
                <span>
                  <a>Get Now</a>
                </span>
              </div>
              <div className="overlay-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente pariatur assumenda nobis voluptatum deserunt sint error
                voluptates!
              </div>
              {/* <div className="overlay-color"></div> */}
            </div>

            <div className="discover-content">
              <div className="img-container">
                <img
                  className="img-fluid"
                  src={require("../../assets/images/CONITIONER.jpg")}
                  alt=""
                />
              </div>
              <div className="text">
                <span>Conditioner</span>
                <span>
                  <a>Get Now</a>
                </span>
              </div>
              <div className="overlay-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente pariatur assumenda nobis voluptatum deserunt sint error
                voluptates!
              </div>
              {/* <div className="overlay-color"></div> */}
            </div>

            <div className="discover-content">
              <div className="img-container">
                <img
                  className="img-fluid"
                  src={require("../../assets/images/BEDSHEETS.jpg")}
                  alt=""
                />
              </div>
              <div className="text">
                <span>Bedsheet</span>
                <span>
                  <a>Get Now</a>
                </span>
              </div>
              <div className="overlay-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente pariatur assumenda nobis voluptatum deserunt sint error
                voluptates!
              </div>
              {/* <div className="overlay-color"></div> */}
            </div>

            <div className="discover-content">
              <div className="img-container">
                <img
                  className="img-fluid"
                  src={require("../../assets/images/paper towels.jpg")}
                  alt=""
                />
              </div>
              <div className="text">
                <span>Paper Towel</span>
                <span>
                  <a>Get Now</a>
                </span>
              </div>
              <div className="overlay-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente pariatur assumenda nobis voluptatum deserunt sint error
                voluptates!
              </div>
              {/* <div className="overlay-color"></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SupplyComponent;
