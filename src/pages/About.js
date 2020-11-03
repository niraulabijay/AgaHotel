import React from "react";
import FixedNavbar from "../components/FixedNavbar";
import Footer from "../components/Footer";
import BrandSection from "../components/home/BrandSection";

export default function About() {
  return (
    <>
      <div className="fixed-navbar">
        <FixedNavbar />
      </div>
      <div className="about-page">
        <div className="about-content">
          <div className="row">
            <div className="col-md-6">
              <div className="about-text">
                <div className="header">About us</div>
                <div className="para">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ipsum obcaecati, ea recusandae officia mollitia aperiam est id
                  doloremque autem, iure quis dolores accusantium eaque sapiente
                  nisi sequi, voluptate repellendus ad.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-banner">
                <img
                  className="img-fluid"
                  src={require("../assets/images/about-banner.jpg")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="owner">
          <div className="main-title">Owners</div>
          <div className="container">
            <div className="row owner-wrapper">
              <div className="col-md-4 offset-md-1">
                <div className="owner-img">
                  <img
                    src={require("../assets/images/owner2.jpg")}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="owner-wrap">
                  <div className="owner-name">Jaylon Donin</div>
                  <div className="description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quae maxime deleniti iusto fugit impedit esse possimus sed
                    ducimus debitis. Minima harum et facere porro! Quae eveniet
                    odit fugiat ab id?
                  </div>
                </div>
              </div>
            </div>
            <div className="row owner-wrapper2">
              <div className="col-md-4 order-md-1">
                <div className="owner-img">
                  <img
                    src={require("../assets/images/owner1.jpg")}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6 order-md-0">
                <div className="owner-wrap">
                  <div className="owner-name">Davis Philips</div>
                  <div className="description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quae maxime deleniti iusto fugit impedit esse possimus sed
                    ducimus debitis. Minima harum et facere porro! Quae eveniet
                    odit fugiat ab id?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overview">
          <div className="row">
            <div className="col-lg-6">
              <div className="overview-content">
                <div className="title">Overview</div>
                <div className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem, ratione possimus quia tempora obcaecati nihil
                  iste, eum voluptatum voluptates quam provident sequi
                  temporibus aliquam est, dolorum odio excepturi fuga in. Lorem
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img-container">
                <img
                  src={require("../assets/images/about-bottom.png")}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mission">
          <div className="container">
            <div className="main-title">Our Mission</div>

            <div className="subtitle">
              "The mission of our hotel is to provide outstanding lodging
              facilities and services to our guests. Our hotel focuses on
              individual business and leisure travel, as well as travel
              associated with groups meetings .we emphasise high quality
              standards in our rooms and food and beverage divisions. We provide
              a fair return on investment for our owners and recognise."
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="mission-wrapper">
                  <div className="img-container">
                    <img
                      src={require("../assets/images/about-icon1.png")}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="name">Customer Satisfaction</div>
                  <div className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid alias laboriosam nesciunt exercitationem, quis saepe
                    enim dignissimos pariatur excepturi asperiores debitis
                    quibusdam fuga commodi, omnis temporibus optio dolore unde
                    iure.
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mission-wrapper">
                  <div className="img-container">
                    <img
                      src={require("../assets/images/about-icon2.png")}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="name">Maintain Quality Standard</div>
                  <div className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid alias laboriosam nesciunt exercitationem, quis saepe
                    enim dignissimos pariatur excepturi asperiores debitis
                    quibusdam fuga commodi, omnis temporibus optio dolore unde
                    iure.
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mission-wrapper">
                  <div className="img-container">
                    <img
                      src={require("../assets/images/about-icon3.png")}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="name">Create Enduring Relationships</div>
                  <div className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid alias laboriosam nesciunt exercitationem, quis saepe
                    enim dignissimos pariatur excepturi asperiores debitis
                    quibusdam fuga commodi, omnis temporibus optio dolore unde
                    iure.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
