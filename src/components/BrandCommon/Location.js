import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Axios from "axios";
import axiosInstance from "../../helpers/axios";

export default function Location({ hotelbrand }) {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    let source = Axios.CancelToken.source();
    const loadData = async () => {
      try {
        const response = axiosInstance.get(`/brand/hotels/${hotelbrand}`, {
          cancelToken: source.token,
        });
        // console.log((await response).data);
        // setLogo((await response).data.brand.logo)
        setLocation((await response).data.hotels);
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

  // console.log(location)/

  return (
    <>
      <div class="location-container">
        <div class="header">Our Locations</div>
        <div class="brand-location">
          <Slider>
            {location &&
              location.map((loca) => (
                <div class="slider">
                  <div class="row">
                    <div class="col-sm-6">
                      <div
                        class="img-container "
                        style={{ backgroundImage: `url(${loca.image})` }}
                      ></div>
                    </div>
                    <div class="col-sm-6">
                      <div class="text-container">
                        <div className="brand-title">{loca.title}</div>
                        <div>{loca.contact.street}</div>
                        <div>{loca.contact.city}</div>
                        <div>
                          {loca.contact.state} {loca.contact.postcode}
                        </div>
                        <br/>
                        <div><i className="fa fa-phone" />&nbsp;{loca.contact.phone_1}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            {/* <div class="slider">
              <div class="row">
                <div class="col-sm-6">
                  <div class="img-container location-image2"></div>
                </div>
                <div class="col-sm-6">
                  <div class="text-container">
                    <div>2050 Marengo St.</div>
                    <div> Los Angeles,</div>
                    <div>CA 90033</div>
                  </div>
                </div>
              </div>
            </div>
          */}
          </Slider>
        </div>
      </div>
    </>
  );
}
