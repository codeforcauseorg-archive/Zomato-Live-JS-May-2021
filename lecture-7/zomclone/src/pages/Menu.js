import { useState, useEffect, useContext } from "react";
import { Box, List } from "@material-ui/core";
import Dish from "../components/Dish";
import axios from "axios";
import { Typography } from "@material-ui/core";
import AppBarSimple from "../components/AppBarSimple";
import { CartContext } from "../App";

export default function Menu({ resId }) {
  let empty = {
    name: "fetching",
    menu: [],
  };

  let [restraunt, setRestraunt] = useState(empty);
  let [total, setTotal] = useState(0);
  let { cart } = useContext(CartContext);

  useEffect(
    function () {
      let tot = 0;
      for (let [id, item] of cart.items) {
        let { dish, quantity } = item;
        tot += dish.price * quantity;
      }
      setTotal(tot);
    },

    [cart]
  );

  useEffect(
    function () {
      axios
        .get(`http://localhost:5000/restaurant/${resId}`)
        .then((response) => {
          // console.log(response);
          setRestraunt(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [resId, setRestraunt]
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      style={{
        height: "100%",
      }}
    >
      <AppBarSimple text={restraunt.name} />
      <Typography>Order total is {total}</Typography>
      {/* <Typography variant="h2">{restraunt.name}</Typography> */}
      <List
        style={{
          flexGrow: 1,
          overflow: "auto",
        }}
      >
        {restraunt.menu.map((dish, index) => {
          return <Dish key={index} dish={dish} />;
        })}
      </List>
    </Box>
  );
}
