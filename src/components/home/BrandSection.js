import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import axiosInstance from "../../helpers/axios";
import Skeleton from 'react-loading-skeleton';

export default function BrandSection() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    let source = Axios.CancelToken.source();
    const loadData = async () => {
      try {
        const response = axiosInstance.get("/brands", {
          cancelToken: source.token,
        });
        console.log((await response).data);
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

  return (
    <>
      <div className="brands" id="brandSection">
        <div className="main-title">Our Brands</div>
        <div className="stars">
          <span>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </span>
        </div>
        <div className="brand-list">
          <div className="container">
            <div className="row">
              {brands.length ?
                brands.map((brand, index) => (
                  <div className="col-lg-3 col-6">
                    <a href="" className="brand-img">
                      <Link to={"/brand/" + brand.slug}>
                        <img src={brand.logo} alt="" />
                      </Link>
                    </a>
                  </div>
                ))
              :
                  [1,2,3,4].map((none,index)=>(
                    <div className="col-lg-3 col-6">
                      <a href="" className="brand-img">
                        <Skeleton width={150} height={100} />
                      </a>
                    </div>
                  ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
