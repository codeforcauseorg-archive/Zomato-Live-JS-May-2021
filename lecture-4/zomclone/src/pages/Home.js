import axios from "../utils/axios";
import { useContext } from "react";
import { UserContext } from "../App";
import firebase from "../utils/firebase";
export default function Home() {
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

      <button
        onClick={function () {
          axios
            .get("http://localhost:5000/search")
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        }}
      >
        Trigger
      </button>
    </div>
  );
}
