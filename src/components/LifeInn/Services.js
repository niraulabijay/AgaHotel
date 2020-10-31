import React from "react";

function Services(props) {
  const {services} = props 
  console.log(services)
  return (
    <>
      <div className="lyfeinn-services">
        <div className="header">Our Services</div>

        <div className="dis-container">
          {services && 
          services.map((service, index)=>
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
              {service.description}
            </div>
            <div className="overlay-color"></div>
          </div>
          )
          }
        </div>
      </div>
    </>
  );
}

export default Services;
