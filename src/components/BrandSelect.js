import React, { Component, useState } from "react";
import Select from "react-select";
import ErrorComponent from "./FormikComponent/ErrorComponent";
import { Field, ErrorMessage } from "formik";

function BrandSelect(props) {
  const { name, placeholder, ...rest } = props;
  const options = [
    { value: "earth_inn", label: "ERTH INN" },
    { value: "lyfe_inn", label: "LYFE INN" },
    { value: "hotel_blu", label: "HOTEL BLU" },
    { value: "aga_hotel", label: "AGA HOTEL" },
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
                    setFieldValue("brand.value", opt.value);
                    setFieldValue("brand.label", opt.label);
                  }}
                  {...rest}
                />
              </>
            );
          }}
        </Field>

        <ErrorMessage name={name} component={ErrorComponent} />
      </div>
    </>
  );
}

export default BrandSelect;
