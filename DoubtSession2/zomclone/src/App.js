import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Routes from "./Routes";
import firebase from "./utils/firebase";
import axios from "./utils/axios";

let UserContext = React.createContext();
let RestrauntsContext = React.createContext();
let CartContext = React.createContext();
let BillContext = React.createContext();
const stripePromise = loadStripe(
  "pk_test_51IUbT3FbtBd1AtA8p4bvxMLKXVANljkwaeqd5DdTYHdOdrgRGcFXF9D2gLeAqQpDLi2StPbBBVpfo60xCMaBAWyk000C2WJRrZ"
);

function App() {
  let emptyCart = {
    restraunt: undefined,
    restrauntId: undefined,
    items: new Map(),
  };

  let [user, setUser] = useState();
  let [total, setTotal] = useState(0);
  let [restraunts, setRestraunts] = useState([]);
  let [cart, setCart] = useState(emptyCart);

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
        <Elements stripe={stripePromise}>
          <CartContext.Provider value={{ cart, setCart, emptyCart }}>
            <UserContext.Provider value={{ user, setUser }}>
              <BillContext.Provider value={{ total, setTotal }}>
                <RestrauntsContext.Provider value={{ restraunts }}>
                  <Routes />
                </RestrauntsContext.Provider>
              </BillContext.Provider>
            </UserContext.Provider>
          </CartContext.Provider>
        </Elements>
      </Box>
    </Box>
  );
}

export { App, UserContext, RestrauntsContext, CartContext, BillContext };
