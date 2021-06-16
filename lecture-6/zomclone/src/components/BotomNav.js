import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction label="Order" value="/" icon={<RestoreIcon />} />
      <BottomNavigationAction
        label="Go Out"
        value="/out"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Gold"
        value="/gold"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction
        label="Search"
        value="/search"
        icon={<FolderIcon />}
      />
      <BottomNavigationAction
        label="Profile"
        value="/profile"
        icon={<FolderIcon />}
      />
    </BottomNavigation>
  );
}
