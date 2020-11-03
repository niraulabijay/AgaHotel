import React from "react";

function Services({ services }) {
  console.log(services);
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
          {services &&
            services.map((service) => (
              <div className="discover-content">
                <div className="img-container">
                  <img
                    className="img-fluid"
                    src={service.image}
                    alt=""
                  />
                </div>
                <div className="text">{service.title}</div>
                <div className="overlay-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente pariatur assumenda nobis voluptatum deserunt sint
                  error voluptates!
                </div>
                {/* <div className="overlay-color"></div> */}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Services;
