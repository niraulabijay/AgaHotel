import React, { useEffect } from "react";
import FixedNavbar from "../components/FixedNavbar";
import RegisterBanner from "../components/Register/RegisterBanner";
import RegisterForm from "../components/Register/RegisterForm";

export default function Register() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.getElementById("mySidenav").style.width = "0";
  }, []);
  return (
    <>
      <div className="fixed-navbar">
        <FixedNavbar />
      </div>
      <div className="register-page">
        <RegisterBanner />

        <div class="register-form-container">
          <div class="container">
            <div class="row justify-content-lg-center">
              <div class="col-lg-8">
                <div class="register-form">
                  <div class="form-header">Registration Form</div>

                  <RegisterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
