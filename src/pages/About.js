import React from "react";
import FixedNavbar from "../components/FixedNavbar";
import Footer from "../components/Footer";
import BrandSection from "../components/home/BrandSection";
import AboutContent from "../components/About/AboutContent";
import AboutBanner from "../components/About/AboutBanner";

export default function About() {
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
