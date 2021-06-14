import { useContext } from "react";
import { Redirect } from "react-router";
import { UserContext } from "../App";

export default function AuthGaurd({ children }) {
  let { user } = useContext(UserContext);

  if (user === undefined) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "#666666",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img alt="anything" src="/logo192.png"></img>
      </div>
    );
  } else if (user === null) {
    return <Redirect to="/login" />;
  } else {
    return children;
  }
}
