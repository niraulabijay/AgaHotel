import React from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker, DateRange } from 'react-date-range';
import {Field} from 'formik';


const DatePicker = ({form: {values, setFieldValue}}) =>{
    const handleChange= (ranges)=>{
        console.log(ranges)
    }
    console.log(values)
    return(
     <DateRange
      ranges={[values.selectionRange]}
      months = {2}
      onChange={({...ranges}) => {
            setFieldValue("selectionRange.startDate", ranges.selection.startDate)
            setFieldValue("selectionRange.endDate", ranges.selection.endDate)

         }}/>   
    )
}
export default DatePicker