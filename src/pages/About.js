import React, { useEffect } from "react";
import FixedNavbar from "../components/FixedNavbar";
import Footer from "../components/Footer";
import BrandSection from "../components/home/BrandSection";
import AboutContent from "../components/About/AboutContent";
import AboutBanner from "../components/About/AboutBanner";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.getElementById("mySidenav").style.width = "0";
  }, []);
  return (
    <>
      <div className="fixed-navbar">
        <FixedNavbar />
      </div>
      <AboutBanner />
      <AboutContent />
    </>
  );
}
