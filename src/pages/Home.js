import React from "react";
import Banner from "../components/Banner";
import Designed from "../components/home/Designed";
import Facilities from "../components/home/Facilities";
import Welcome from "../components/home/Welcome";
import BrandSection from "../components/home/BrandSection";

export default function Home() {
  return (
    <>
      <Banner />
      <Welcome />
      <Designed />
      <BrandSection />
      <Facilities />
      <div className="top-footer">
        <div className="container">
          <div className="item-container">
            <div className="item-wrapper">
              <div className="title">Contact Aga Hotels</div>
              <div className="button-container">
                <a href="" className="mybtn">
                  Need Help?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
