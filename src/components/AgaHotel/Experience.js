import React from "react";

export default function BrandExperience(props) {
  const{brand,experience} = props
  return (
    <>
      <div className="experience">
        <div className="row">
          <div className=" col-md-5">
            <div className="img-container">
              <img src={experience.image} alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="main-title">The Experience</div>
            <div className="description">
            Your experience matters the most to AGA Hotel Franchise.
             We provide you with very comfortable Bedrooms, Swimming Pool, Gym, Cafeteria, Dining hall and Spa.
              Our Hotels are conveniently located near popular destinations, restaurants, museums and tourist areas. 
            We want your stay at AGA Hotels to be a memorable one.
            </div>
          </div>
          <div className="col-md-3 logo-holder">
            <div className="logo-container">
              <img
                src={brand.logo}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
