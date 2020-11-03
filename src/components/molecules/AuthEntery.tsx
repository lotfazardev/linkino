import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { Form, FormGroup, Input, Label } from "reactstrap";

interface AuthEnteryProps {
  isLogin: boolean;
}

const AuthEntery: React.FC<AuthEnteryProps> = ({ isLogin }) => {
  const [State, setState] = useState({
    email: "",
    password: "",
    name: "",
  });
  return (
    <Form className="p-3 p-md-5">
      <h4>{isLogin ? "Login" : "Sign Up"}</h4>
      <div className="pt-4">
        {!isLogin ? (
          <FormGroup>
            <Label htmlFor="Name">Full name</Label>
            <Input
              id="Name"
              value={State.name}
              onChange={(e) => setState({ ...State, name: e.target.value })}
              type="text"
              placeholder="Your name"
            />
          </FormGroup>
        ) : null}
        <FormGroup>
          <Label htmlFor="Email">Email</Label>
          <Input
            id="Email"
            value={State.email}
            onChange={(e) => setState({ ...State, email: e.target.value })}
            type="text"
            placeholder="Your email address"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="Password">Password</Label>
          <Input
            id="Password"
            value={State.password}
            onChange={(e) => setState({ ...State, password: e.target.value })}
            type="password"
            placeholder="Choose a safe password"
          />
        </FormGroup>
      </div>
      <div>
        {isLogin ? (
          <Button color="primary">Login</Button>
        ) : (
          <Button color="primary">SignUp</Button>
        )}
        <div className="mt-3">
          {isLogin ? (
            <Link to="/Signup">need to create an account?</Link>
          ) : (
            <Link to="/Login">already have an account?</Link>
          )}
        </div>
      </div>
    </Form>
  );
};

export default AuthEntery;
