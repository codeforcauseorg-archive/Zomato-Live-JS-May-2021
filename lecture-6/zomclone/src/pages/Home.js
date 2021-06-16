import axios from "../utils/axios";
import Restraunt from "../components/Restraunt";
import { useEffect, useState } from "react";
import { List } from "@material-ui/core";

export default function Home() {
  let [restraunts, setRestraunts] = useState([]);

  useEffect(async function () {
    let response = await axios.get("http://localhost:5000/restaurant/");
    console.log(response);
    setRestraunts(response.data.slice(0, 20));
  }, []);

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
