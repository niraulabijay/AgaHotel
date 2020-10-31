import  React from "react";

function RegisterBanner(){
    return (
      <>
        <div className="register-banner">
          <div className="service_header">
            <div className="service-bread">
              <ul>
                <li>
                  <a href="">
                    Home <i className="fas fa-angle-double-right"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    Rewards <i className="fas fa-angle-double-right"></i>
                  </a>
                </li>
                <li>
                  <a className="active" href="">
                    Join
                  </a>
                </li>
              </ul>
            </div>
            <div className="header">Join Aga Hotels</div>
            <div className="sub_header">
              The more you stay, the more rewarding it gets
            </div>
          </div>
          <div className="service_banner_background_image"></div>
        </div>
      </>
    );
}

export default RegisterBanner