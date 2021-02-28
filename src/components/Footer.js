import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import axiosInstance from "../helpers/axios";

export default function Footer() {
  const [brands, setBrands] = useState([]);
  const [setting, setSetting] = useState();

  useEffect(() => {
    let source = Axios.CancelToken.source();
    const loadData = async () => {
      try {
        const response = axiosInstance.get("/brands", {
          cancelToken: source.token,
        });

        setBrands((await response).data.brands);
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
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-2">
              <div className="title">Quick Links</div>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/supply">Supply</Link>
                </li>
                <li>
                  <Link to="/franchise">Franchise</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/reward">Reward</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-lg-2">
              <div className="title">Brands</div>
              <ul>
                {brands.map((brand) => (
                  <li>
                    <Link to={"/brand/" + brand.slug}>{brand.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-2">
              <div className="title">Corporate</div>
              <ul>
                <li>
                  <Link to="/">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/register">Join Now</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <div className="title">Help</div>
              <ul>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <div className="title">Follow us on Social Media</div>
              <ul className="social-link">
                <li>
                  <a href={setting && setting.facebook_link} target="_blank">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href={setting && setting.instagram_link} target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href={setting && setting.twitter_link} target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href={setting && setting.tumblr_link} target="_blank">
                    <i className="fab fa-tumblr"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright-container">
            <strong>&copy; 2020 AGA Hotel Group </strong> All right reserved.
          </div>
        </div>
      </div>
    </>
  );
}
