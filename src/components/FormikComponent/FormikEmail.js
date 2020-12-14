import React from "react"
import ErrorComponent from './ErrorComponent'
import {Field, ErrorMessage} from 'formik'

const FormikEmail = (props) =>{
    const {name, label, ...rest} = props
    return(
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Field className="form-control" name={name} id={name} {...rest} />
            <ErrorMessage name={name} component={ErrorComponent}/>
        </div>
    )
}

export default FormikEmail;