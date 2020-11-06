import React from "react";
import Footer from "../components/Footer";
import SearchNavbar from "../components/SearchNavbar";
import "../assets/css/franchise.css";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import FixedNavbar from "../components/FixedNavbar";
import RegisterBanner from "../components/Franchise/FranchiseBanner";
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
const onSubmit = (data) => {
  console.log(data);
};
export default function Franchise() {
  return (
    <>
      <div className="fixed-navbar">
        <FixedNavbar />
      </div>
      <RegisterBanner />
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
              <div className="header">Leave us a Message</div>
              <div className="sub-header">We would love to hear from you.</div>
              <div className="franchise-form">
                <Formik
                  initialValues={initialValue}
                  onSubmit={onSubmit}
                  validationSchema={ValidationSchema}
                >
                  <Form>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <Field
                        className="form-control"
                        name="name"
                        type="text"
                        id="name"
                      />
                      {/* <ErrorMessage name="name" component={TextError}/> */}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <Field
                        className="form-control"
                        name="email"
                        type="text"
                        id="email"
                      />
                      {/* <ErrorMessage name="email" component={TextError}/> */}
                    </div>
                    <div className="form-group">
                      <label htmlFor="number">Phone Number</label>
                      <Field
                        className="form-control"
                        name="phone"
                        type="phone"
                        id="phone"
                      />
                      {/* <ErrorMessage name="phone" component={TextError}/> */}
                    </div>
                    <div className="form-group">
                      <label htmlFor="number">Message</label>
                      <Field
                        conponent="text-area"
                        className="form-control"
                        name="message"
                        id="message"
                        cols="30"
                        rows="1"
                      />
                      {/* <ErrorMessage name="message" component={TextError}/> */}
                    </div>
                    <div className="form-btn">
                      <button type="submit">Send</button>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
