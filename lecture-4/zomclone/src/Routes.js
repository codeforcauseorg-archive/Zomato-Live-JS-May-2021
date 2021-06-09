import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthGaurd from "./components/AuthGaurd";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function Routes() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <AuthGaurd>
          <MainLayout>
            <Home />
          </MainLayout>
        </AuthGaurd>
      </Route>
    </Switch>
  );
}
