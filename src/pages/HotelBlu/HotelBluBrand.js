import React from "react";
import BrandBanner from "../../components/BrandCommon/BrandBanner";
import Welcome from "../../components/AgaHotel/Welcome";
import WeProvide from "../../components/HotelBlu/WeProvide";
import BrandContact from "../../components/brand/BrandContact";
import Experience from "../../components/HotelBlu/Experience";
import Room from "../../components/BrandCommon/Room";

export default function HotelBluBrand({data}) {
  console.log(data)
  const {banner, brand, experience, services, ...rest} = data
  return (
    <>
      <BrandBanner brand={brand} banner={banner} />
      <div className="aga-brand">
        <Welcome />
        <Experience experience={experience} brand={brand} />
        <WeProvide services={services}/>
        <Room />
        <BrandContact />
      </div>
    </>
  );
}
