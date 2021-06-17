import { useState, useEffect } from "react";
import { List } from "@material-ui/core";
import Dish from "../components/Dish";
import axios from "axios";

export default function Menu({ resId }) {
  let [ menu, setMenu ] = useState([]);

  useEffect(
    function () {
      axios
        .get(`http://localhost:5000/restaurant/${resId}`)
        .then((response) => {
          // console.log(response);
          setMenu(response.data.menu);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [resId, setMenu]
  );


  return (
    <List
      style={{
        height: "100%",
        overflow: "auto",
      }}
    >
      {menu && menu.map((dish, index) => {
        return <Dish key={index} dish={dish} />;
      })}
    </List>
  );
}
