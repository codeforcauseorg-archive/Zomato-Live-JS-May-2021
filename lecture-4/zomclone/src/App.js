import "./App.css";
import React, { useEffect, useState } from "react";
import Routes from "./Routes";
import firebase from "./utils/firebase";
import axios from "./utils/axios";

let UserContext = React.createContext();

function App() {
  let [user, setUser] = useState();

  useEffect(
    function () {
      firebase.auth().onAuthStateChanged(function (userInfo) {
        setUser(userInfo);
        if (user) {
          user.getIdToken().then(function (token) {
            console.log(token);
            axios.defaults.headers["Authorization"] = `Bearer ${token}`;
          });
        }
      });
    },
    [user]
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes />;
    </UserContext.Provider>
  );
}

export { App, UserContext };
