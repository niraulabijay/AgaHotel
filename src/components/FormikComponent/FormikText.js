import React from "react";
import ErrorComponent from "./ErrorComponent";
import { Field, ErrorMessage } from "formik";

const FormikText = (props) => {
  const { name, label, placeholder, ...rest } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Field
        className="form-control"
        name={name}
        id={name}
        placeholder={placeholder}
        {...rest}
      />
      <ErrorMessage name={name} component={ErrorComponent} />
    </div>
  );
};

export default FormikText;
