import React, { useEffect, useState } from "react";
import Routes from "./Routes";
import firebase from "./utils/firebase";
import axios from "./utils/axios";
import { Box } from "@material-ui/core";

let UserContext = React.createContext();
let RestrauntsContext = React.createContext();

function App() {
  let [user, setUser] = useState();
  let [restraunts, setRestraunts] = useState([]);

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

  useEffect(
    function () {
      axios
        .get("http://localhost:5000/restaurant/")
        .then((response) => {
          setRestraunts(response.data.slice(0, 20));
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [restraunts]
  );

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{
        background: "#999999",
      }}
    >
      <Box
        style={{
          width: "500px",
          height: "100vh",
          background: "#ffffff",
        }}
      >
        <UserContext.Provider value={{ user, setUser }}>
          <RestrauntsContext.Provider value={{ restraunts }}>
            <Routes />
          </RestrauntsContext.Provider>
        </UserContext.Provider>
      </Box>
    </Box>
  );
}

export { App, UserContext, RestrauntsContext };
