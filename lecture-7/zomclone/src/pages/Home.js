import { useContext } from "react";
import { List } from "@material-ui/core";
import { RestrauntsContext } from "../App";
import Restraunt from "../components/Restraunt";

export default function Home() {
  let {restraunts} = useContext(RestrauntsContext);

  return (
    <List
      style={{
        height: "100%",
        overflow: "auto",
      }}
    >
      {restraunts.map(function (info, index) {
        return <Restraunt key={index} info={info} />;
      })}
    </List>
  );
}
