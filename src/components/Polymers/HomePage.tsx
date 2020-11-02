import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const HomePage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center full-size">
      <h1 className="pt-5 text-info">Linkino Project</h1>
      <h3 className="pt-3 text-muted">
        This is a super simple GraphQL based project using Apollo !
      </h3>
      <div className="pt-4">
        <Link to="/View">
          <Button tag="a" className="p-3 m-3" color="info">
            View Links
          </Button>
        </Link>
        <Link to="/Add">
          <Button tag="a" className="p-3 m-3" color="danger">
            Add Link
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
