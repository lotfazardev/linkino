import React, { useContext, useEffect, useState } from "react";
import { useMutation } from "react-apollo";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { Interface } from "readline";
import { SIGNUP_MUTATION } from "../../graphql/mutation";
import { AUTH_TOKEN } from "../../utils/constants";
import { TokenContext } from "../../utils/TokenContext";
import ErrorBox from "../atoms/ErrorBox";

interface AuthEnteryProps {
  isLogin: boolean;
}

interface userTokenInterface {
  token: string;
}

const AuthEntery: React.FC<AuthEnteryProps> = ({ isLogin }) => {
  const [State, setState] = useState({
    email: "",
    password: "",
    name: "",
  });

  const { UserToken, setUserToken } = useContext(TokenContext);

  const [IsStart, setIsStart] = useState<boolean>(false);

  const history = useHistory();

  const saveUserData = (userToken: userTokenInterface) => {
    localStorage.setItem(AUTH_TOKEN, userToken.token);
    setUserToken(userToken.token);
  };

  const [Signup, SignupResult] = useMutation(SIGNUP_MUTATION, {
    variables: {
      name: State.name,
      email: State.password,
      password: State.password,
    },
  });

  const handelClick = () => {
    if (isLogin) {
      // login mutation function here
    } else {
      Signup().catch((err) => {
        console.log(err);
      });
    }
  };

  useEffect(() => {
    if (IsStart) {
      saveUserData(SignupResult.data?.signup);
      history.push("/");
    } else {
      setIsStart(true);
    }
  }, [SignupResult.data]);

  return (
    <>
      {!UserToken ? (
        <Form className="p-3 p-md-5">
          {SignupResult.error ? (
            <ErrorBox errorText={SignupResult.error.message} />
          ) : null}
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
                onChange={(e) =>
                  setState({ ...State, password: e.target.value })
                }
                type="password"
                placeholder="Choose a safe password"
              />
            </FormGroup>
          </div>
          <div>
            {isLogin ? (
              <Button onClick={handelClick} color="primary">
                Login
              </Button>
            ) : (
              <Button onClick={handelClick} color="primary">
                SignUp
              </Button>
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
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default AuthEntery;
