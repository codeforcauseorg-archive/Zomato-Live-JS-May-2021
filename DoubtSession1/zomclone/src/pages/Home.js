import { useContext } from "react";
import { UserContext } from "../App";
import firebase from "../utils/firebase";
export default function Home() {
  let value = useContext(UserContext);
  // console.log(value);
  let user = value.user;
  console.log(user);
  return (
    <div>
      <h1>{user.displayName || user.phoneNumber}</h1>
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
