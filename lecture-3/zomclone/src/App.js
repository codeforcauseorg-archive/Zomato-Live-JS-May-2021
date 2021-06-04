import "./App.css";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "./utils/firebase";
import { useEffect, useState } from "react";

function App() {
  let [user, setUser] = useState();

  useEffect(function () {
    firebase.auth().onAuthStateChanged(function (userInfo) {
      setUser(userInfo);
    });
  }, []);

  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/",
    // We will display Google and Facebook as auth providers.
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };

  if (user === undefined) {
    return <h1>Loading....</h1>;
  } else if (user === null) {
    return (
      <div className="App">
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Hello {user.displayName}</h1>
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
}

export default App;
