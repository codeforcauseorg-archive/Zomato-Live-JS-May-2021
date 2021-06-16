import { useContext } from "react";
import { UserContext } from "../App";
export default function Gold() {
  let { user } = useContext(UserContext);
  return (
    <div>
      <h1>Gold</h1>
    </div>
  );
}