import { Avatar, Button, Box } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useContext } from "react";
import { UserContext } from "../App";
import firebase from "../utils/firebase";

export default function Profile() {
  let { user, setUser } = useContext(UserContext);
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      style={{
        height: "100%",
      }}
    >
      <Avatar
        alt={user ? user.displayName : ""}
        src={user ? user.photoURL : ""}
      />
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {user ? user.displayName : ""}
      </h1>
      <Button
        onClick={() => {
          firebase.auth().signOut();
          setUser(undefined);
        }}
        variant="contained"
        color="secondary"
        startIcon={<ExitToAppIcon />}
        style={{ width: "300px" }}
      >
        LogOut
      </Button>
    </Box>
  );
}
