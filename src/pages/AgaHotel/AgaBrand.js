import React, { useEffect } from "react";
import BrandBanner from "../../components/BrandCommon/BrandBanner";
import Welcome from "../../components/AgaHotel/Welcome";
import WeProvide from "../../components/AgaHotel/WeProvide";
import DiscoverMore from "../../components/AgaHotel/DiscoverMore";
import BrandContact from "../../components/BrandCommon/BrandContact";
import Experience from "../../components/AgaHotel/Experience";
import Room from "../../components/BrandCommon/Room";
import MetaDescription from "../../Utilities/MetaDescription";

export default function AgaBrand({ data }) {
  const { brand, banner, services, experience, seo, ...rest } = data;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.getElementById("mySidenav").style.width = "0";
  }, []);
  console.log(seo.meta_title);
  return (
    <>
      <MetaDescription
        title={seo.meta_title}
        description={seo.meta_description}
      />
      <BrandBanner brand={brand} banner={banner} brandcolor="aganav" />
      <div className="aga-brand">
        <Welcome />
        <Experience brand={brand} experience={experience} />
        <WeProvide />
        <DiscoverMore services={services} />
        <Room hotelbrand={brand.slug} brand={brand} />
        <BrandContact />
      </div>
    </>
  );
}
