import { useContext } from "react";
import { UserContext } from "../App";
import firebase from "../utils/firebase";
export default function () {
  let { user } = useContext(UserContext);
  return (
    <div>
      <h1>{user.displayName}</h1>
      <button
        onClick={function () {
          firebase.auth().signOut();
        }}
      >
        Logout
      </button>
    </div>
  );
}
