import React, {useState} from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup'
// import TextError from '../FormikComponent/TextError';
import FormikControl from '../FormikComponent/FormikControl';
import axiosInstance from '../../helpers/axios';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

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
const initialValue = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

// 



const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (data, onSubmitProps) => {
    setLoading(true);
    axiosInstance.post('/contact', 
    data
    ).then(response =>{
      setLoading(false)
      onSubmitProps.resetForm()
      console.log(response);
    }
    ).error(response =>{
      setLoading(false)
      console.log(response)
    }
    )
  };

    return(
            <div className="faq-form-container ">
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
  );
};

export default Contact;
