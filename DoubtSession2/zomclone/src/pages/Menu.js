import { useState, useEffect, useContext } from "react";
import { Box, List, Button } from "@material-ui/core";
import Dish from "../components/Dish";
import axios from "axios";
import { Typography } from "@material-ui/core";
import AppBarSimple from "../components/AppBarSimple";
import { BillContext, CartContext } from "../App";
import { useHistory } from "react-router-dom";

export default function Menu({ resId }) {
  let empty = {
    name: "fetching",
    menu: [],
  };

  let history = useHistory();

  let [restraunt, setRestraunt] = useState(empty);
  let {total, setTotal} = useContext(BillContext);
  let { cart, setCart } = useContext(CartContext);

  useEffect(
    function () {
      let tot = 0;
      for (let item of cart.items) {
        let { dish, quantity } = item[1];
        tot += dish.price * quantity;
      }
      setTotal(tot);
    },
    [cart, setTotal]
  );

  useEffect(
    function () {
      axios
        .get(`http://localhost:5000/restaurant/${resId}`)
        .then((response) => {
          // console.log(response);
          let copy = { ...cart };
          copy.restrauntId = resId;
          copy.restraunt = response.data;
          setCart(copy);
          setRestraunt(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [resId, setRestraunt, cart, setCart]
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
      {cart.items.size === 0 ? undefined : (
        <Box
          display="flex"
          flexDirection="row"
          style={{
            height: "auto",
          }}
        >
          <Typography
            style={{
              flexGrow: "1",
              margin: "5px",
            }}
          >
            Order total is {total}
          </Typography>
          <Button
            onClick={function () {
              history.push("checkout");
            }}
            variant="contained"
            color="secondary"
            style={{
              marginRight: "5px",
              marginTop: "5px",
            }}
          >
            View Cart
          </Button>
        </Box>
      )}
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
