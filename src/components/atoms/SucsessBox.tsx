import React from "react";
import { Alert } from "reactstrap";

interface SucsessBoxProps {
  message: String;
}

const SucsessBox: React.FC<SucsessBoxProps> = ({ message }) => {
  return <Alert color="primary">{message}</Alert>;
};

export default SucsessBox;
