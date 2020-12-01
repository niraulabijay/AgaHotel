import React from "react";
import { Formik, Field, Form } from "formik";
import FormikControl from "./FormikComponent/FormikControl";

function WhereTo(props) {
	const { initialValues, validationSchema } = props;
  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
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
                    {/* <div className="item">
                      <span>
                        <i className="fa fa-search"></i>
                      </span>
                      <Field type="text" placeholder="Los Angeles" />
                      <div className="item-sup">Destination</div>
                    </div> */}
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
                          //   startDate={initialValues.selectionRange.startDate}
                          //   endDate={initialValues.selectionRange.endDate}
                        />
                      </div>
                      {/* <div className="mobile-checkdate">
                        <span>
                          <i className="fa fa-calendar"></i>
                        </span>
                        <input type="date" placeholder="Find a Hotel" />
                        <input type="date" placeholder="Find a Hotel" />
                      </div> */}
                      {/* <div className="item-sup" id="mobile-check-title">
                        <div className="row">
                          <div className="col-6">Check-in</div>
                          <div className="col-6">Check-out</div>
                        </div>
                      </div> */}
                    </div>

                    <div className="item">
                      <span className="search-logo">
                        <i className="fas fa-users"></i>
                      </span>
                      <FormikControl control="occupancy" name="occupancy" />
                      <div className="item-sup">Occupancy</div>
                    </div>

                    <div className="button-container">
                      <button>Search</button>
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
