import React, { useEffect } from "react";
import BrandBanner from "../../components/BrandCommon/BrandBanner";
import BrandContact from "../../components/BrandCommon/BrandContact";
import Room from "../../components/BrandCommon/Room";
import Location from "../../components/BrandCommon/Location";
import Services from "../../components/LifeInn/Services";
import Welcome from "../../components/LifeInn/Welcome";
import MetaDescription from "../../Utilities/MetaDescription";

export default function LyfeBrand({ data }) {
  console.log("apple");
  const { banner, brand, experience, services, seo, ...rest } = data;
  useEffect(() => {
    window.scrollTo(0, 0);
    document.getElementById("mySidenav").style.width = "0";
  }, []);
  return (
    <>
      <MetaDescription
        title={seo.meta_title}
        description={seo.meta_description}
      />

      <BrandBanner brand={brand} banner={banner} brandcolor="lyfenav" />
      <div className="lyfe-brand">
        <Welcome />
        <Services services={services} />
        <Room hotelbrand={brand.slug} brand={brand} />
        <Location hotelbrand={brand.slug} />
        <BrandContact />
      </div>
    </>
  );
}
