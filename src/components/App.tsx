import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { AUTH_TOKEN } from "../utils/constants";
import { TokenContext } from "../utils/TokenContext";
import PostForm from "./molecules/PostForm";
import TopNavbar from "./molecules/TopNavbar";
import HomePage from "./Polymers/HomePage";
import LoginPage from "./Polymers/LoginPage";
import SignupPage from "./Polymers/SignupPage";
import ViewPage from "./Polymers/ViewPage";

const App = () => {
  const [UserToken, setUserToken] = useState(
    localStorage.getItem(AUTH_TOKEN) || ""
  );
  return (
    <>
      <TokenContext.Provider value={{UserToken, setUserToken}}>
        <TopNavbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/View">
            <ViewPage />
          </Route>
          <Route exact path="/Add">
            <PostForm />
          </Route>
          <Route exact path="/Signup">
            <SignupPage />
          </Route>
          <Route exact path="/Login">
            <LoginPage />
          </Route>
          <Route path="/">
            <p>404</p>
          </Route>
        </Switch>
      </TokenContext.Provider>
    </>
  );
};

export default App;
