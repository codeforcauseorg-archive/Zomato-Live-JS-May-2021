import { useContext, useEffect } from "react";
import { BillContext, CartContext, UserContext } from "../App";
import { Box, Typography, List, Button } from "@material-ui/core";
import Dish from "../components/Dish";
import { useHistory } from "react-router-dom";
import StripeButtonComponent from "../components/StripeButtonComponent";

export default function Checkout() {
  let { total, setTotal } = useContext(BillContext);
  let { user } = useContext(UserContext);
  let { cart } = useContext(CartContext);
  let restraunt = cart.restraunt;
  let history = useHistory();
  //   console.log(cart.items.values());
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

  return (
    <Box
      display="flex"
      flexDirection="column"
      style={{
        height: "100%",
        margin: "5px",
      }}
    >
      <Typography variant="h4">Order Summary</Typography>
      <Typography variant="h6">{restraunt && restraunt.name}</Typography>
      <Typography variant="subtitle2">
        {restraunt && restraunt.address}
      </Typography>
      <Typography>{user.displayName}</Typography>
      {cart.items.size === 0 ? (
        <Box display="flex" flexDirection="row">
          <Typography
            variant="h6"
            style={{
              flexGrow: "1",
            }}
          >
            Cart is Empty
          </Typography>
          <Button
            onClick={function () {
              history.goBack();
            }}
            variant="contained"
            color="secondary"
            style={{
              marginRight: "5px",
            }}
          >
            Back To Menu
          </Button>
        </Box>
      ) : (
        <Box display="flex" flexDirection="row">
          <Typography
            color="primary"
            style={{
              flexGrow: "1",
            }}
          >
            Order total is {total}
          </Typography>
          <Button
            onClick={function () {
              history.goBack();
            }}
            style={{
              marginRight: "5px",
            }}
          >
            Back To Menu
          </Button>
          {/* <Button
            variant="contained"
            color="primary"
            style={{
              marginRight: "5px",
            }}
          >
            Proceed To Pay
          </Button> */}
          <StripeButtonComponent price={total} />
        </Box>
      )}
      <List
        style={{
          flexGrow: 1,
          overflow: "auto",
        }}
      >
        {[...cart.items].map((item, index) => {
          return <Dish key={index} dish={item[1].dish} />;
        })}
      </List>
    </Box>
  );
}
