import React from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup'
import TextError from '../FormikComponent/TextError';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const ValidationSchema =  Yup.object({
    name: Yup.string().required('The name field is required'),
    email: Yup.string().email('Invalid Email Address').required('The email field is required'),
    phone: Yup.string().required('The phone number is required').matches(phoneRegExp, 'Phone number not valid'),
    message: Yup.string().required('The Message is Required')
})
const initialValue = {
    name: '',
    email: '',
    phone: '',
    message: ''
}

const onSubmit = data => {
    console.log(data)
}

const Contact = () => {
    return(
            <div className="faq-form-container">
                <div className="row">
                    <div className="col-12 col-md-6 offset-md-3">
                        <div className="header">
                            Leave us a Message
                        </div>
                        <div className="sub-header">
                            We would love to hear from you.
                        </div>
                        <div className="faq-form">
                        <Formik
                        initialValues={initialValue}
                        onSubmit={onSubmit}
                        validationSchema={ValidationSchema}
                        >
                            <Form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <Field className="form-control" name="name" type="text" id="name" />
                                    <ErrorMessage name="name" component={TextError}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <Field className="form-control" name="email" type="text" id="email" />
                                    <ErrorMessage name="email" component={TextError}/>

                                </div>
                                <div className="form-group">
                                    <label htmlFor="number">Phone Number</label>
                                    <Field className="form-control" name="phone" type="phone" id="phone" />
                                    <ErrorMessage name="phone" component={TextError}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="number">Message</label>
                                    <Field conponent="text-area" className="form-control" name="message" id="message" cols="30" rows="1" />
                                    <ErrorMessage name="message" component={TextError}/>
                                </div>
                                <div className="form-btn">
                                    <button type="submit">
                                        Send
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                        </div>
                    </div>
                </div>
   
            </div>
       
    )
}

export default Contact