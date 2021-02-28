import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import Designed from "../components/home/Designed";
import Facilities from "../components/home/Facilities";
import Welcome from "../components/home/Welcome";
import BrandSection from "../components/home/BrandSection";
import BrandContact from "../components/BrandCommon/BrandContact";
import { Helmet } from "react-helmet";
import MetaDescription from "../Utilities/MetaDescription";

export default function Home({ toggle }) {
  const { pathname, hash } = useLocation();
  console.log(hash);
  useEffect(() => {
    window.scrollTo(0, 0);
    toggle &&
      document
        .getElementById(toggle)
        .scrollIntoView({ behavior: "smooth", block: "center" });
    document.getElementById("mySidenav").style.width = "0";
  }, [pathname]);

  return (
    <>
      <MetaDescription title="AGA Hotel" keyword="a" description="Best Hotel in USA" />
      <Banner />
      <Welcome />
      <Designed />
      <BrandSection />
      <Facilities />
      <BrandContact />
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
