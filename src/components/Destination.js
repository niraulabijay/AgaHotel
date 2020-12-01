import React, { useState, useEffect } from "react";
import axiosInstance from "../helpers/axios";
import Axios from "axios";
import Select, { NonceProvider } from "react-select";
import { Field } from "formik";

const Destination = (props) => {
  const [destination, setDestination] = useState([]);

  useEffect(() => {
    let source = Axios.CancelToken.source();
    const loadData = async () => {
      try {
        const response = axiosInstance.get(`/destinations`, {
          cancelToken: source.token,
        });
        setDestination((await response).data.destinations);
      } catch (error) {
        if (!Axios.isCancel(error)) {
          throw error;
        }
      }
      return () => {
        source.cancel();
      };
    };
    loadData();
  }, []);

  let destinationOption = [];

  if (destination) {
    destination.map((desti) => {
      destinationOption.push({ value: desti.id, label: desti.location });
    });
  }

  function customTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "#d8d8d8",
      },
    };
  }

  return (
    <>
      <Field name="destination">
        {({ form: { values, setFieldValue } }) => {
          //   const { values } = values;
          console.log(values.destination.label);
          return (
            <>
              <div className="destination-select ">
                <Select
                  options={destinationOption}
                  placeholder="Search Destination"
                  theme={customTheme}
                  onChange={(opt, e) => {
                    //   handleDestinationChange(opt, e);
                    setFieldValue("destination.value", opt.value);
                    setFieldValue("destination.label", opt.label);
                  }}
                  value={
                    destinationOption
                      ? destinationOption.find(
                          (option) => option.value === values.destination.value
                        )
                      : ""
                  }
                  isSearchable
                />
              </div>
            </>
          );
        }}
      </Field>
    </>
  );
};

export default Destination;
