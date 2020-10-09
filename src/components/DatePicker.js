import React from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker, DateRange } from "react-date-range";
import { Field } from "formik";
import $ from "jquery";

const DatePicker = ({ form: { values, setFieldValue }, setCal }) => {
	const handleChange = (ranges) => {
		console.log(ranges);
    };
    const checkFocusOut = () =>{

        $(".rdrCalendarWrapper").focusout(function () {
            // setCal(false);
            $(this).removeClass('active');
        });
    }

	console.log(values);
	return (
		<DateRange
			ranges={[values.selectionRange]}
			months={2}
			onChange={({ ...ranges }) => {
				setFieldValue("selectionRange.startDate", ranges.selection.startDate);
                setFieldValue("selectionRange.endDate", ranges.selection.endDate);
                checkFocusOut();
			}}
		/>
	);
};
export default DatePicker;
