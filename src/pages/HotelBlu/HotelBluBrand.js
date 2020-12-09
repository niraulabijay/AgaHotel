import React, { useEffect } from "react";
import BrandBanner from "../../components/BrandCommon/BrandBanner";
import Welcome from "../../components/HotelBlu/Welcome";
import WeProvide from "../../components/HotelBlu/WeProvide";
import BrandContact from "../../components/BrandCommon/BrandContact";
import Experience from "../../components/HotelBlu/Experience";
import Room from "../../components/BrandCommon/Room";

export default function HotelBluBrand({data}) {
  console.log(data)
  const {banner, brand, experience, services, ...rest} = data
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <BrandBanner brand={brand} banner={banner} brandcolor="blunav" />
      <div className="aga-brand">
        <Welcome />
        <Experience experience={experience} brand={brand} />
        <WeProvide services={services} />
        <Room hotelbrand={brand.slug} />
        <BrandContact />
      </div>
    </>
  );
}
