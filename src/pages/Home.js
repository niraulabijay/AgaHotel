import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import Designed from "../components/home/Designed";
import Facilities from "../components/home/Facilities";
import Welcome from "../components/home/Welcome";
import BrandSection from "../components/home/BrandSection";
import BrandContact from "../components/BrandCommon/BrandContact";
import { Helmet } from "react-helmet";
import MetaDescription from "../Utilities/MetaDescription";
import Axios from "axios";
import axiosInstance from "../helpers/axios";

export default function Home({ toggle }) {
  const [setting, setSetting] = useState();
  const { pathname, hash } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    toggle &&
      document
        .getElementById(toggle)
        .scrollIntoView({ behavior: "smooth", block: "center" });
    document.getElementById("mySidenav").style.width = "0";
  }, [pathname]);
  useEffect(() => {
    let source = Axios.CancelToken.source();
    const loadData = async () => {
      try {
        const response = axiosInstance.get("/site_setting", {
          cancelToken: source.token,
        });

        setSetting((await response).data.data);
      } catch (error) {
        if (!Axios.isCancel(error)) {
          throw error;
        }
      }
      return () => {
        source.cancel();
      };
    };
    loadData();
  }, []);



  return (
    <>
      <MetaDescription
        title={setting && setting.meta_title}
        keyword="a"
        description={setting && setting.meta_description}
      />
      <Banner />
      <Welcome />
      <Designed />
      <BrandSection />
      <Facilities />
      <BrandContact />
      <div className="top-footer">
        <div className="container">
          <div className="item-container">
            <div className="item-wrapper">
              <div className="title">Contact AGA Hotels</div>
              <div className="button-container">
                <Link to="/contact" className="mybtn">
                  Need Help?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
