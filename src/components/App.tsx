import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthEntery from "./molecules/AuthEntery";
import PostForm from "./molecules/PostForm";
import TopNavbar from "./molecules/TopNavbar";
import HomePage from "./Polymers/HomePage";
import LoginPage from "./Polymers/LoginPage";
import SignupPage from "./Polymers/SignupPage";
import ViewPage from "./Polymers/ViewPage";

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
