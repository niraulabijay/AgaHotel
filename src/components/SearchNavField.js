import React, { useState, useEffect, Component } from "react";
import {
  Formik,
  Field,
  Form,
  setFieldValue,
  ErrorMessage,
  FieldArray,
} from "formik";
import * as Yup from "yup";
import DateSearch from "./DateSearch";
import DatePicker from "./DatePicker";
import { addDays, set, format } from "date-fns";
import RoomSelector from "./RoomSelector";
import FormikControl from "./FormikComponent/FormikControl";
import WhereTo from "./WhereTo";
import axiosInstance from "../helpers/axios";
import { useHistory } from "react-router-dom";

const validationSchema = Yup.object({
  destination: Yup.string().required("This Field Cannot be Empty"),
});
export default function SearchNavField() {
  let history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(new Date(), 1));
  const [cal, setCal] = useState(false);
  const [showRoom, setShowRoom] = useState(false);
  const [adultNumber, setAdultNumber] = useState(0);

  const onSubmit = (data) => {
    // alert("hello");
    console.log(data , "newform")

    console.log(data.destination.value);
    let newVar = { destination_id: data.destination.value };

    axiosInstance
      .post("/booking/hotels", {
        destination_id: data.destination.value ? data.destination.value : "all",
      })
      //  then(res=>   console.log(res.data))
      .then((res) => history.push(`/hotel/${res.data.destination_id}`))

      .catch((err) => console.log(err, "error"));
  };

  const initialValues = {
    destination: { value: "", label: "" },
    checkIn: "",
    occupancy: [{ adult: 1, child: 0, id: "" + Math.random() }],
    specialRate: "",
    selectionRange: {
      startDate: startDate,
      endDate: endDate,
      key: "selection",
    },
  };
  const [destination, setDestination] = useState({});

  const openMobileDateBar = (e) => {
    e.preventDefault();
    document.getElementById("mobileDateBar").style.width = "100%";
    getCalendarMobile();
  };

  /* Close/hide the sidenav */
  const closeMobileDateBar = (e) => {
    e.preventDefault();
    document.getElementById("mobileDateBar").style.width = "0";
  };
  const openOccupancyBar = () => {
    document.getElementById("occupancyBar").style.width = "100%";
    handleRoomMobile();
  };

  /* Close/hide the sidenav */
  const closeOccupancyBar = (e) => {
    e.preventDefault();
    document.getElementById("occupancyBar").style.width = "0";
  };
  const handleRoom = (e) => {
    e.preventDefault();
    document.querySelectorAll(".option-content")[1].classList.add("active");
    document
      .querySelectorAll(".rdrDateRangeWrapper")[1]
      .classList.remove("active");
    if (!showRoom) {
      setShowRoom(true);
    } else {
      setShowRoom(false);
    }
  };
  const getCalendarMobile = () => {
    document
      .querySelector(".mobileDateBar .rdrDateRangeWrapper")
      .classList.add("active");
    document.querySelector(" .option-content").classList.remove("active");
  };
  const handleRoomMobile = () => {
    document.querySelector(".option-content").classList.add("active");
    document.querySelector(".rdrDateRangeWrapper").classList.remove("active");
    if (!showRoom) {
      setShowRoom(true);
    } else {
      setShowRoom(false);
    }
  };
  return (
    <div className="search-wrapper" id="searchBar">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form className="container">
            <div className="bottom-search-bar d-none d-lg-flex">
              <div className="item">
                <FormikControl control="destination" name="destination" />
                <div className="item-sup">Destination</div>
                {/* <span><ErrorMessage name="destination" /></span> */}
              </div>

              <div className="item item-calender">
                <div className="item-sup sup-calendar">
                  <div>Check In</div>
                  <div>Check Out</div>
                </div>

                <div className="mobile-checkdate">
                  <FormikControl
                    control="date"
                    type="text"
                    name="selectionRange"
                    startDate={initialValues.selectionRange.startDate}
                    endDate={initialValues.selectionRange.endDate}
                  />
                </div>
              </div>

              <div className="item">
                <span className="search-logo">
                  <i className="fas fa-users"></i>
                </span>
                <FormikControl control="occupancy" name="occupancy" />
                {/* value={`${values.occupancy.length} Room ${adultNumber}`} */}
                <div className="item-sup">Occupancy</div>
              </div>
              <div className="button-container">
                <button type="submit">Search</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <WhereTo
        initialValues={initialValues}
        validationSchema={validationSchema}
      />
    </div>
  );
}
