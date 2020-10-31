import React, { useState, useEffect, useRef } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker, DateRange } from "react-date-range";
import { Field, ErrorMessage } from "formik";
import {addDays} from 'date-fns'

const DatePicker = (props) => {

  const { label, name, startDate, endDate, ...rest } = props;
  const [open, setOpen] = useState(false);
  const node = useRef();
  
  // console.log(open)

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div ref={node}>
      {/* <label htmlFor={name}>{label}</label> */}
      <div className="row">
        <div className="col-6">
          <Field
            type="text"
            placeholder=""
            name="checkin"
            onClick={() => setOpen(!open)}
            value={startDate}
          />
        </div>
        <div className="col-6">
          <Field
            type="text"
            placeholder=""
            name="checkin"
            onClick={() => setOpen(!open)}
            value={endDate}
          />
        </div>
      </div>

      {/* <button type="button" onClick={() => setOpen(!open)}>
        Button
      </button> */}
      {open && (
        <Field name={name}>
          {({ form: { values, setFieldValue } }) => {
            console.log(values);
            return (
              <DateRange
                ranges={[values.selectionRange]}
                months={2}
                showSelectionPreview={false}
                showMonthAndYearPickers={false}
                direction="horizontal"
                minDate={new Date()}
                maxDate={addDays(new Date(), 7)}
                onChange={({ ...ranges }) => {
                  setFieldValue(
                    "selectionRange.startDate",
                    ranges.selection.startDate
                  );
                  setFieldValue(
                    "selectionRange.endDate",
                    ranges.selection.endDate
                  );
                }}
                {...rest}
              />
            );
          }}
        </Field>
      )}
      <ErrorMessage name={name} />
    </div>
  );
};
export default DatePicker;
