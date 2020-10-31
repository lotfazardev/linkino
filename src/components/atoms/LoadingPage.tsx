import React from "react";
import { Spinner } from "reactstrap";

const LoadingPage = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      id="loadingPage"
    >
      <Spinner color="primary" />
    </div>
  );
};

export default LoadingPage;
