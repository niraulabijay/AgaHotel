import React from 'react'
import Footer from '../components/Footer'
import SearchNavbar from '../components/SearchNavbar'
import '../assets/css/franchise.css'
import * as Yup from 'yup'
import {Formik, Field, Form, ErrorMessage} from 'formik';
import FixedNavbar from '../components/FixedNavbar'
import RegisterBanner from '../components/Franchise/FranchiseBanner'
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const initialValue = {
    name: '',
    email: '',
    phone: '',
    message: ''
}
const ValidationSchema =  Yup.object({
    name: Yup.string().required('The name field is required'),
    email: Yup.string().email('Invalid Email Address').required('The email field is required'),
    phone: Yup.string().required('The phone number is required').matches(phoneRegExp, 'Phone number not valid'),
    message: Yup.string().required('The Message is Required')
})
const onSubmit = data => {
    console.log(data)
}
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
                <div className="col-lg-4 offset-lg-1 ">
                  <div className="img-container">
                    <img src={require("../assets/images/a.jpg")} alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="franchise-welcome-content">
                    <div className="title">Who we Are?</div>
                    <div className="description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem, ratione possimus quia tempora obcaecati
                      nihil iste, eum voluptatum voluptates quam provident sequi
                      temporibus aliquam est, dolorum odio excepturi fuga in.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem, ratione possimus quia tempora obcaecati
                      nihil iste, eum voluptatum voluptates quam provident sequi
                      temporibus aliquam est, dolorum odio excepturi fuga in.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="franchise-title">Why Franchise With Us</div>
          <div className="franchise-para container">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Necessitatibus
            perspiciatis, magni nisi, accusamus commodi aspernatur aut soluta ab
            doloribus laudantium repellat asperiores sunt ipsam rem explicabo
            unde, harum dolorum et? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Exercitationem quibusdam ipsum pariatur, aliquid, illo
            voluptates molestias laudantium nemo accusamus similique excepturi
            necessitatibus nobis. Illo nobis rerum pariatur, nam natus expedita.
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Blanditiis, numquam obcaecati ullam eos facilis voluptates rem,
            beatae possimus distinctio fugit asperiores quidem magni sunt Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Suscipit libero
            ratione at. Repudiandae animi in soluta Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Laudantium dolor asperiores iusto
            provident, ducimus mollitia minus, quas reprehenderit adipisci
            explicabo nihil. Vitae fuga magnam in! Ipsa obcaecati facilis saepe
            nulla! quas assumenda nesciunt tempore voluptate eos nam aliquam
            cupiditate pariatur ab, repellat nulla deserunt. esse suscipit iusto
            vitae officiis quae. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Optio vero dolor soluta quibusdam dolorem delectus
            minus, recusandae a nam non iusto deserunt adipisci obcaecati
            placeat qui molestias natus inventore consequatur.
          </div>
          <div className="franchise-form-container">
            <div className="row">
              <div className="col-12 col-md-6 offset-md-3">
                <div className="header">Leave us a Message</div>
                <div className="sub-header">
                  We would love to hear from you.
                </div>
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
