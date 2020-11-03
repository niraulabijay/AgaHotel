import React from "react";

function DiscoverMore(props) {
  const { services } = props;
  return (
    <>
      <div className="aga-discover">
        <div className="header">Discover More.</div>

        <div className="dis-container">
          {services.map((service) => (
            <div className="discover-content">
              <div className="img-container">
                <img className="img-fluid" src={service.image} alt="" />
              </div>
              <div className="text">{service.title}</div>
              <div className="overlay-text">{service.description}</div>
              <div className="overlay-color"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DiscoverMore;
