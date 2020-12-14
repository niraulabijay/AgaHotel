import React from "react";
import { Formik, Field, Form } from "formik";
import FormikControl from "./FormikComponent/FormikControl";
import axiosInstance from "../helpers/axios";
import { useHistory } from "react-router-dom";
import $ from "jquery";

function WhereTo(props) {
  const { initialValues, validationSchema } = props;
  let history = useHistory();

  const onSubmit = (data) => {
    let newVar = { destination_id: data.destination.value };

    axiosInstance
      .post("/booking/hotels", {
        destination_id: data.destination.value ? data.destination.value : "all",
      })
      //  then(res=>   console.log(res.data))
      .then((res) => {
        history.push(`/hotel/${res.data.destination_id}`);
        $(".modal-backdrop").remove();
        $("body").removeClass("modal-open");
        $("#myModal .close").click();
      })
      // .then(()=>{

      // })

      .catch((err) => console.log(err, "error"));
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="container">
          <div
            className="bottom-search-bar-mobile d-flex d-lg-none"
            data-toggle="modal"
            data-target="#myModal"
          >
            <span>Where to</span>
            <span>
              <i className="fa fa-ellipsis-v"></i>
            </span>
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
                        />
                      </div>
                    </div>

                    <div className="item">
                      <span className="search-logo">
                        <i className="fas fa-users"></i>
                      </span>
                      <FormikControl control="occupancy" name="occupancy" />
                      <div className="item-sup">Occupancy</div>
                    </div>

                    <div className="button-container">
                      <button type="submit">Search</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default WhereTo;
