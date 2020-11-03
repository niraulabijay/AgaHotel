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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam aut
              vel fugit dolorum incidunt at ducimus porro placeat similique
              suscipit quas inventore esse, enim ipsam doloremque dolore
              exercitationem necessitatibus ipsa.Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quam aut vel fugit dolorum incidunt
              at ducimus porro placeat similique suscipit quas inventore esse,
              enim ipsam doloremque dolore exercitationem necessitatibus ipsa.
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
