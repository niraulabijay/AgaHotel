import React, { useEffect } from "react";
import BrandBanner from "../../components/BrandCommon/BrandBanner";
import BrandContact from "../../components/BrandCommon/BrandContact";
import Room from "../../components/BrandCommon/Room";
import Location from "../../components/BrandCommon/Location";
import Services from "../../components/EarthInn/Services";
import Welcome from "../../components/EarthInn/Welcome";

export default function EarthBrand({ data }) {
  console.log(data)
  const { banner,brand,experience,services,  ...rest } = data;
    useEffect(() => {
      window.scrollTo(0, 0);
        document.getElementById("mySidenav").style.width = "0";
    }, []);
 
  return (
    <>
      <BrandBanner brand={brand} banner={banner} brandcolor="erthnav" />
      <div className="earthinn-brand">
        <Welcome />
        <Services services={services} />
        <Room hotelbrand={brand.slug}  brand= {brand}/>
        <Location hotelbrand={brand.slug} />
        <BrandContact />
      </div>
    </>
  );
}
