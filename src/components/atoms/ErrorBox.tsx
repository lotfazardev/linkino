import React from "react";
import { Alert } from "reactstrap";

interface ErrorBoxProps {
  errorText: String;
}

const ErrorBox: React.FC<ErrorBoxProps> = ({ errorText }) => {
  return <Alert color="danger">{errorText}</Alert>;
};

export default ErrorBox;
