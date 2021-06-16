import { useContext } from "react";
import { UserContext } from "../App";
export default function Out() {
  let { user } = useContext(UserContext);
  return (
    <div>
      <h1>Out</h1>
    </div>
  );
}
