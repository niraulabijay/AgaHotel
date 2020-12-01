import React from "react";
import {Link} from "react-router-dom"
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
              <div className="title">Contact AGA Hotels</div>
              <div className="button-container">
              <Link to="/contact" className="mybtn">
                  Need Help?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
