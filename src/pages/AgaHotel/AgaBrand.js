import React from "react";
import BrandBanner from "../../components/BrandCommon/BrandBanner";
import Welcome from "../../components/AgaHotel/Welcome";
import WeProvide from "../../components/AgaHotel/WeProvide";
import DiscoverMore from "../../components/AgaHotel/DiscoverMore";
import BrandContact from "../../components/brand/BrandContact";
import Experience from "../../components/AgaHotel/Experience";
import Room from "../../components/BrandCommon/Room";

export default function AgaBrand() {
  return (
    <>
      <BrandBanner />
      <div className="aga-brand">
        <Welcome />
        <Experience />
        <WeProvide />
        <DiscoverMore />
        <Room />
        <BrandContact />
      </div>
    </>
  );
}
