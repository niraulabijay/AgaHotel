import React, { useState, useEffect } from 'react'
import FixedNavbar from './FixedNavbar';
import {Formik, Field, Form, setFieldValue, ErrorMessage, FieldArray, } from "formik";
import * as Yup from 'yup';
import DateSearch from './DateSearch'
import DatePicker from './DatePicker'
import {addDays, set, format} from 'date-fns'
import RoomSelector from './RoomSelector';

const validationSchema = Yup.object({
	destination: Yup.string().required("This Field Cannot be Empty"),
})



const SearchNavbar = ({form}) => { 
	const [startDate, setStartDate] = useState(new Date())
	const [endDate, setEndDate] = useState(addDays(new Date(),1))
	const [cal, setCal] = useState(false)
	const [showRoom, setShowRoom] = useState(false)
	const [adultNumber, setAdultNumber] = useState(0)
	// const [adult, setAdult] = useState(0)
	const getCalendar = e => {
		e.preventDefault()
		setCal(true)
	}
	const handleRoom = e =>{
		e.preventDefault()
		if(!showRoom){
			setShowRoom(true)
		}else{
			setShowRoom(false)
		}
	}
	// console.log(adultNumber)
	// console.log(form)
	// setFieldValue('ocup', adultNumber.length)

	useEffect(() => {
		// if(adultNumber.length>0){
		// adultNumber.map(room=>{
		// })
		// }
		// return () => {
		// 	cleanup
		// }
	}, [])
	
	
    return (
        <>
            <div className="fixed-navbar">
				<FixedNavbar />
				<div className="search-wrapper" id="searchBar">
				<Formik initialValues={{
					destination: '',
					checkIn: '',
					occupancy : [{adult: 1, child: 0, id: ""+ Math.random()}],
					specialRate: '',
					selectionRange: {
						startDate: startDate,
						endDate: endDate,
						key: 'selection'
					}					
				}}
				onSubmit={(data, {setSubmitting})=>{
					setSubmitting(true);
					//make async call
					{/* console.log(data.startDate.format('YYYY-MM-DD')) */}
					console.log("submit", data)

					setSubmitting(false)
				}}
				validationSchema={validationSchema}
				>
				{({ isSubmitting }) =>(
					<Form className="container" >
						<div className="bottom-search-bar d-none d-lg-flex">
							<div className="item">
									<span><i className="fa fa-search"></i></span>
									<Field 
									type="text" 
									placeholder="Los Angeles" 
									name="destination" 
									/>
								<div className="item-sup">
									Destination
								</div>
								{/* <span><ErrorMessage name="destination" /></span> */}
							</div>
							<div className="item" >				
								<div className="mobile-checkdate">
									<span ><i className="fa fa-calendar" ></i></span>
										<Field name="dates">
										{
											({form}) => {
												const {values} = form
												console.log(values.selectionRange.startDate)
												console.log(format(values.selectionRange.startDate,'MMMM dd yyyy'))
												return(
													<>
												<div onClick={getCalendar}>{format(values.selectionRange.startDate,'MMM dd yyyy')}  </div>
												<input type="date" />
													</>
												)
											}
										}
										</Field>
									
									
									{/* <button onClick={DatePicker}>Apple</button> */}
								</div>

								<div className="item-sup" id="mobile-check-title">
									<div className="row">
										<div className="col-6">
											Check-in
										</div>
										<div className="col-6">
											Check-out
										</div>	
									</div>
								</div>
							</div>
							<div className="item">
								<span><i className="fas fa-users"></i></span>
								<Field name="ocup">
								{
									({form, field})=>{
									const {values, setFieldValue} = form
									{/* {values.occupancy.filter(room => setAdultNumber(adultNumber + room.adult))} */}
									{/* values.occupancy.map(function(item) { return item.adult }).reduce(function(curval, newval) { return curval + newval }) */}
									return <input   type="text" 
									onClick={handleRoom}
									value={`${values.occupancy.length} Room ${values.occupancy.map(item => item.adult ).reduce((curval, newval) =>  curval + newval )} Adult`}
									>
									</input>
								}
								}
								</Field>
								{/* value={`${values.occupancy.length} Room ${adultNumber}`} */}
								<div className="item-sup">
									Occupancy
								</div>
							</div>
							<div className="item">
								<span><i className="fas fa-dollar-sign"></i></span>
								{/* <!-- <select>
									<option value="">Lowest Available Rate</option>
									<option value="">Promotional Code</option>
									<option value="">Senior Citizen Rate</option>
								</select> --> */}
								<input type="text" placeholder="Lowest Available Rate" />
								<div className="item-sup">
									Special rates
								</div>
							</div>
							<div className="button-container">
							<button disabled={isSubmitting} type="submit">
									Search
							</button>
							</div>
						</div>
						<div
							className="bottom-search-bar-mobile d-flex d-lg-none"
							data-toggle="modal"
							data-target="#myModal"
						>
							<span>Where to</span>
							<span><i className="fa fa-ellipsis-v"></i></span>
						</div>
						<div className="modal" id="myModal">
							<div className="modal-dialog">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title">Where to</h5>
										<button type="button" className="close" data-dismiss="modal">
											&times;
										</button>
									</div>

									<div className="modal-body">
										<div className="bottom-search-bar">
											<div className="item">
												<span><i className="fa fa-search"></i></span>
												<input type="text" placeholder="Los Angeles" />
											<div className="item-sup">
												Destination
											</div>
										</div>
										<div className="item">				
											<div className="mobile-checkdate">
												<span><i className="fa fa-calendar"></i></span>
												<input type="date" placeholder="Find a Hotel" />
												<input type="date" placeholder="Find a Hotel" />
											</div>
			
											<div className="item-sup" id="mobile-check-title">
												<div className="row">
													<div className="col-6">
														Check-in 
													</div>
													<div className="col-6">
														Check-out
													</div>	
												</div>
											</div>
										</div>
										<div className="item">
											<span><i className="fas fa-users"></i></span>
											<input type="text" placeholder="1 Room 1 Adult" />
											<div className="item-sup">
												Occupancy
											</div>
										</div>
										<div className="item">
											<span><i className="fas fa-dollar-sign"></i></span>
											{/* <!-- <select>
												<option value="">Lowest Available Rate</option>
												<option value="">Promotional Code</option>
												<option value="">Senior Citizen Rate</option>
											</select> --> */}
											<input type="text" placeholder="Lowest Available Rate" />
											<div className="item-sup">
												Special rates
											</div>
										</div>
										<div className="button-container">
											<button disabled={isSubmitting} type="submit">
												Search
											</button>
										</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{cal &&
						<Field
                						component={DatePicker}
              			/>
						}
						{showRoom &&
						<Field component={RoomSelector} />
						}
					</Form>
					)}
					
					</Formik>
				</div>
			</div>

        </>
    )
}

export default SearchNavbar;