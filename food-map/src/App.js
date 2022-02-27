import { Redirect, Route, Switch } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";
import CustomerDashboard from "./components/CustomerDashboard";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/hello" />
        </Route>
        <Route path="/hello">
          <HomePage />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/customer-dashboard">
          <CustomerDashboard />
        </Route>
      </Switch>
    </div>
  );
}
