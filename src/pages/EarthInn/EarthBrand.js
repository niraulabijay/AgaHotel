import React from "react";
import BrandBanner from "../../components/BrandCommon/BrandBanner";
import BrandContact from "../../components/brand/BrandContact";
import Room from "../../components/BrandCommon/Room";
import Location from "../../components/BrandCommon/Location";
import Services from "../../components/EarthInn/Services";
import Welcome from "../../components/EarthInn/Welcome";

export default function EarthBrand({ data }) {
  console.log(data)
  const { banner,brand,experience,services,  ...rest } = data;
  return (
    <>
      <BrandBanner brand={brand} banner={banner} />
      <div className="earthinn-brand">
        <Welcome />
        <Services services={services}/>
        <Room />
        <Location />
        <BrandContact />
      </div>
    </>
  );
}
