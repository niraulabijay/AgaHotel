import React from "react";
import DatePicker from "../DatePicker";
import RoomSelector from "../RoomSelector";
import Destination from "../Destination";
import FormikText from "./FormikText";
import FormikEmail from "./FormikEmail";
import FormikPhone from "./FormikPhone";
import FormikTextArea from "./FormikTextArea";
import BrandSelect from "../BrandSelect";
import RoomNumber from "./RoomNumber";
import TermSelect from "../TermSelect";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "date":
      return <DatePicker {...rest} />;
    case "occupancy":
      return <RoomSelector {...rest} />;
    case "destination":
      return <Destination {...rest} />;
    case "input":
      return <FormikText {...rest} />;
    case "email":
      return <FormikEmail {...rest} />;
    case "phone":
      return <FormikPhone {...rest} />;
    case "message":
      return <FormikTextArea {...rest} />;
    case "brand":
      return <BrandSelect {...rest} />;
    case "roomnumber":
      return <RoomNumber {...rest} />;
    case "term":
      return <TermSelect {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
