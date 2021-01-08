import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import SearchNavbar from "../components/SearchNavbar";
import "../assets/css/franchise.css";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import FixedNavbar from "../components/FixedNavbar";
import FranchiseBanner from "../components/Franchise/FranchiseBanner";
import FormikControl from "../components/FormikComponent/FormikControl";
import axiosInstance from "../helpers/axios";
import { tr } from "date-fns/locale";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const initialValue = {
  name: "",
  email: "",
  phone: "",
  message: "",
};
const ValidationSchema = Yup.object({
  name: Yup.string().required("The name field is required"),
  email: Yup.string()
    .email("Invalid Email Address")
    .required("The email field is required"),
  phone: Yup.string()
    .required("The phone number is required")
    .matches(phoneRegExp, "Phone number not valid"),
  message: Yup.string().required("The Message is Required"),
});

export default function Franchise() {
  const [loading, setLoading] = useState(false)

  const onSubmit = (data, onSubmitProps) => {
    setLoading(true)
    axiosInstance.post('/franchise', data).then(response => {
      setLoading(false)
      onSubmitProps.resetForm()
      console.log(response)}).catch(
        err => {
          setLoading(false)
          console.log(err)
        }
      )
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    document.getElementById("mySidenav").style.width = "0";
  }, []);
  return (
    <>
      <div className="fixed-navbar">
        <FixedNavbar />
      </div>
      <FranchiseBanner />
      <div className="franchise-content">
        <div className="franchise-welcome">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 ">
                <div className="franchise-welcome-content">
                  <div className="title">Who we Are?</div>
                  <div className="description">
                    We are a rapidly growing Hotel Franchise which is loved by
                    the customer because of its supreme customer service and
                    attention to the detail. We are committed to provide a
                    5-star customer service at a very affordable rate. We treat
                    our customers as a family and members and train our staff to
                    provide the optimum level of customer service to our guests.
                  </div>
                </div>
              </div>
              <div className="col-lg-5 ">
                <div className="img-container">
                  <img src={require("../assets/images/a.jpg")} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="franchise-title">Why Franchise With Us</div>
        <div className="franchise-para container">
          AGA Hotels is one of fastest growing Hotel Franchises in the country.
          Our impeccable customer service and attention to the details has
          received much love from our customers. Due to which, we have been able
          to open various locations in a very short period of time. We are
          providing you an opportunity to join our Hotel Franchise so you can
          grow your hotels and achieve financial goals along with us. On top of
          the opportunity to grow, we also provide:
          <ul className="franchise-list">
            <li>Training</li>
            <li>Social Media Marketing</li>
            <li>Social Media Marketing</li>
            <li>Supplies</li>
            <li>Top-notch Booking System</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="franchise-form-container">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3">
              <div className="header">Franchise Enquiry Form</div>
              <div className="sub-header">We would love to hear from you.</div>
              <div className="franchise-form">
                <Formik
                  initialValues={initialValue}
                  onSubmit={onSubmit}
                  validationSchema={ValidationSchema}
                >
                {(formik) => (
                            <Form>
                                <FormikControl
                                name="name"
                                label="Name"
                                type='text'
                                control='input'
                                />
                                <FormikControl
                                name="email"
                                label="Email"
                                type='email'
                                control='email'
                                />
                                <FormikControl
                                name="phone"
                                label="Phone"
                                type='phone'
                                control='phone'
                                />
                                <FormikControl
                                name="message"
                                label="Message"
                                control='message'
                                />
                                <div className="form-btn">
                                    <button type="submit">
                                    { loading &&
                                        <span class="spinner-border" role="status">
                                        <span class="sr-only">Loading...</span>
                                        </span>
                                      }
                                        Send
                                    </button>
                                </div>
                            </Form>
                        )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
