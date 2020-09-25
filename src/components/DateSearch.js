// import React, {useState} from 'react'
// import "react-dates/initialize";
// import {DateRangePicker} from 'react-dates';
// import "react-dates/lib/css/_datepicker.css";
// import { Field } from 'formik';

// const DateSearch = ({
//   	...props
// }) =>{
// 	const [focusedInput, setFocusedInput] = useState(null)
// 	return(
// 		<Field name="DateSearch">
// 			{
// 				({form, field, startDateId, endDateId }) =>{
// 					const {value} = field
// 					const {setFieldValue, values} = form
// 					return <DateRangePicker 
// 					{...field}
// 					startDate= {values.startDate}
// 					endDate = {values.endDate}
// 					startDateId="startId"
//   					endDateId="endId"
// 					onDatesChange={({ startDate, endDate }) => {
//           					setFieldValue("startDate", startDate);
//           					setFieldValue("endDate", endDate);
//         			}}
// 					focusedInput={focusedInput}
//         			onFocusChange={focusedInput => setFocusedInput(focusedInput)}
// 					/>
// 				}
// 			}
// 		</Field>
		 
// 	)
// }

// export default DateSearch


