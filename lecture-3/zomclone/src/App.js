import "./App.css";
import React, { useEffect, useState } from "react";
import Routes from "./Routes";
import firebase from "./utils/firebase";

let UserContext = React.createContext();

function App() {
  let [user, setUser] = useState();

  useEffect(function () {
    firebase.auth().onAuthStateChanged(function (userInfo) {
      setUser(userInfo);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes />;
    </UserContext.Provider>
  );
}

export { App, UserContext };
