import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

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

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h4">{dish.name}</Typography>

        <Typography className={classes.pos} color="textSecondary">
          {`₹ ${dish.price}`}
        </Typography>
        <Typography variant="body2" component="p">
          {dish.isVeg ? "Veg" : "Non Veg"}
        </Typography>
      </CardContent>
    </Card>
  );
}
