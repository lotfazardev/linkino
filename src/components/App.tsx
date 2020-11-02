import React from "react";
import { Route, Switch } from "react-router-dom";
import PostForm from "./molecules/PostForm";
import TopNavbar from "./molecules/TopNavbar";
import HomePage from "./Polymers/HomePage";
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
          <p>SignupPage</p>
        </Route>
        <Route exact path="/Login">
          <p>LoginPage</p>
        </Route>
        <Route path="/">
          <p>404</p>
        </Route>
      </Switch>
    </>
  );
};

export default App;
