import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider } from "react-apollo";
import client from "./graphql/instance";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
