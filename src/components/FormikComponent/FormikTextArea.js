import React from "react"
import ErrorComponent from './ErrorComponent'
import {Field, ErrorMessage} from 'formik'

const FormikTextArea = (props) =>{
    const {name, label, type, ...rest} = props
    return(
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Field as='textarea' className="form-control" name={name} id={name} {...rest} rows={30} cols={30}/>
            <ErrorMessage name={name} component={ErrorComponent}/>
        </div>
    )
}

export default FormikTextArea;