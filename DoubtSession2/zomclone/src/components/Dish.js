import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Box, Button } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CartContext } from "../App";

const useStyles = makeStyles({
  root: {
    width: "95%",
    marginTop: "10px",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "16px",
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Dish({ dish }) {
  // console.log(dish);
  const classes = useStyles();
  const { cart, setCart } = useContext(CartContext);

  let addDish = function (dish) {
    if (cart.items.has(dish.name)) {
      let item = cart.items.get(dish.name);
      item.quantity += 1;
    } else {
      let item = {
        dish,
        quantity: 1,
      };
      cart.items.set(dish.name, item);
    }

    let copy = { ...cart };
    console.log(dish, copy);
    setCart(copy);
  };

  let removeDish = function (dish) {
    if (cart.items.has(dish.name)) {
      let item = cart.items.get(dish.name);
      item.quantity -= 1;
      if (item.quantity === 0) {
        cart.items.delete(dish.name);
      }
    }
    let copy = { ...cart };
    setCart(copy);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            style={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
            }}
            row
          >
            <Typography variant="h5">{dish.name}</Typography>
            <Typography className={classes.pos} color="textSecondary">
              {`₹ ${dish.price}`}
            </Typography>
            <Typography variant="body2" component="p">
              {dish.isVeg ? "Veg" : "Non Veg"}
            </Typography>
          </Box>
          {!cart.items.has(dish.name) ? (
            <Button
              onClick={function () {
                addDish(dish);
              }}
              variant="contained"
            >
              Add
            </Button>
          ) : (
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "Center",
              }}
            >
              <Button
                onClick={function () {
                  addDish(dish);
                }}
                variant="contained"
              >
                +
              </Button>
              <Typography>
                {cart.items.has(dish.name) && cart.items.get(dish.name).quantity}
              </Typography>

              <Button
                onClick={function () {
                  removeDish(dish);
                }}
                variant="contained"
              >
                -
              </Button>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
