import React, { Component } from "react";
import Select from "react-select";
import { Field, ErrorMessage } from "formik";
import ErrorComponent from "./FormikComponent/ErrorComponent";

function TermSelect(props) {
  const { name, placeholder, ...rest } = props;
  const options = [
    { value: "12_months", label: "12 Months" },
    { value: "24_months", label: "24 Months" },
    { value: "36_months", label: "36 Months" },
    { value: "15_years", label: "15 Years Standard" },
  ];
  return (
    <>
      <div className="form-group">
        <Field>
          {({ form: { values, setFieldValue } }) => {
            return (
              <>
                <Select
                  name={name}
                  options={options}
                  placeholder={placeholder}
                  id={name}
                  onChange={(opt, e) => {
                    setFieldValue("term.value", opt.value);
                    setFieldValue("term.label", opt.label);
                  }}
                  {...rest}
                />
              </>
            );
          }}
        </Field>
        {/* <ErrorMessage name={name} component={ErrorComponent} /> */}
      </div>
    </>
  );
}

export default TermSelect;
