import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import AuthGaurd from "./components/AuthGaurd";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Out from "./pages/Out";
import Gold from "./pages/Gold";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Menu from "./pages/Menu";
import Checkout from "./pages/Checkout";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Routes() {
  let query = useQuery();

  return (
    <Switch>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/" exact>
        <AuthGaurd>
          <MainLayout>
            <Home />
          </MainLayout>
        </AuthGaurd>
      </Route>
      <Route path="/out" exact>
        <AuthGaurd>
          <MainLayout>
            <Out />
          </MainLayout>
        </AuthGaurd>
      </Route>
      <Route path="/gold" exact>
        <AuthGaurd>
          <MainLayout>
            <Gold />
          </MainLayout>
        </AuthGaurd>
      </Route>
      <Route path="/search" exact>
        <AuthGaurd>
          <MainLayout>
            <Search />
          </MainLayout>
        </AuthGaurd>
      </Route>
      <Route path="/profile" exact>
        <AuthGaurd>
          <MainLayout>
            <Profile />
          </MainLayout>
        </AuthGaurd>
      </Route>
      <Route path="/menu" exact>
        <AuthGaurd>
          <MainLayout>
            <Menu resId={query.get("resId")}/>
          </MainLayout>
        </AuthGaurd>
      </Route>
      <Route path="/menu/checkout" exact>
        <AuthGaurd>
          <MainLayout>
            <Checkout />
          </MainLayout>
        </AuthGaurd>
      </Route>
    </Switch>
  );
}
