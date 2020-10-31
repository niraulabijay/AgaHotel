import React from "react";
import BrandBanner from "../../components/BrandCommon/BrandBanner";
import BrandContact from "../../components/brand/BrandContact";
import Room from "../../components/BrandCommon/Room";
import Location from "../../components/BrandCommon/Location";
import Services from "../../components/LifeInn/Services";
import Welcome from "../../components/LifeInn/Welcome";

export default function LyfeBrand({data}) {
  console.log('apple')
  const {banner, brand, experience, services, ...rest} = data
  return (
    <>
      <BrandBanner brand={brand} banner={banner} />
      <div className="lyfe-brand">

        <Welcome />
        <Services services={services} />
        <Room />
        <Location />
        <BrandContact />
      </div>
    </>
  );
}
