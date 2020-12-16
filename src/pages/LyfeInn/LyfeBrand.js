import React, { useEffect } from "react";
import BrandBanner from "../../components/BrandCommon/BrandBanner";
import BrandContact from "../../components/BrandCommon/BrandContact";
import Room from "../../components/BrandCommon/Room";
import Location from "../../components/BrandCommon/Location";
import Services from "../../components/LifeInn/Services";
import Welcome from "../../components/LifeInn/Welcome";

export default function LyfeBrand({data}) {
  console.log('apple')
  const {banner, brand, experience, services, ...rest} = data;
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <BrandBanner brand={brand} banner={banner} brandcolor="lyfenav" />
      <div className="lyfe-brand">
        <Welcome />
        <Services services={services} />
        <Room hotelbrand={brand.slug} brand={brand} />
        <BrandContact />
      </div>
    </>
  );
}
