import React from "react";
import NumericInput from "react-numeric-input";
import { Field, ErrorMessage } from "formik";
import ErrorComponent from "./ErrorComponent";

function RoomNumber(props) {
  const { name, placeholder, ...rest } = props;

  return (
    <>
      <div className="form-group room_number_select">
        <Field>
          {({ form: { values, setFieldValue } }) => {
            return (
              <NumericInput
                className="form-control"
                min={0}
                placeholder={placeholder}
                name={name}
                id={name}
                onChange={(value) => {
                  setFieldValue("roomnumber", value);
                }}
                {...rest}
                strict
              />
            );
          }}
        </Field>

        {/* <ErrorMessage name={name} component={ErrorComponent} /> */}
      </div>
    </>
  );
}

export default RoomNumber;
