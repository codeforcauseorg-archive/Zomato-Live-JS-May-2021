import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { useHistory } from "react-router-dom";
import { CartContext } from "../App";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    marginTop: "16px",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "16px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Restraunt({ info }) {
  const classes = useStyles();
  let history = useHistory();
  let { emptyCart, cart, setCart } = useContext(CartContext);

  return (
    <Card
      className={classes.root}
      onClick={() => {
        if(cart.restrauntId!==info._id){
          setCart(emptyCart);
        }
        history.push(`menu/?resId=${info._id}`);
      }}
    >
      <CardMedia
        className={classes.media}
        image={`http://localhost:5000${info.photo}`}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          {info.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {info.address}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
