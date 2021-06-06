import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthGaurd from "./components/AuthGaurd";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function Routes() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/home">
        <AuthGaurd>
          <Home />
        </AuthGaurd>
      </Route>
    </Switch>
  );
}
