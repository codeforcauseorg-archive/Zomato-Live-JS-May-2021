import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  let empty = {
    login: "Default",
    name: "Default Name",
    avatar_url:
      "https://media.istockphoto.com/photos/cute-panda-bear-climbing-in-tree-picture-id523761634?k=6&m=523761634&s=612x612&w=0&h=0L2VZTQvcOVkSmj0ZLL9ntIw2FXqJwZ70fz2Qmq6D-c=",
  };

  let [name, setName] = useState("");
  let [user, setUser] = useState(empty);

  return (
    <div className="App">
      <input
        style={{
          marginTop: "16px",
        }}
        value={name}
        onChange={function (event) {
          setName(event.target.value);
        }}
      />

      <h1>My GitHub username is {name}</h1>
      <button
        style={{
          marginBottom: "16px",
        }}
        disabled={!name}
        onClick={function () {
          axios
            .get(`https://api.github.com/users/${name}`)
            .then(function (response) {
              setUser(response.data);
              console.log(response.data);
            })
            .catch(function (error) {
              setUser(empty);
            });
        }}
      >
        Submit
      </button>
      <br />

      <img src={user.avatar_url} width="200px" height="200px"></img>
      <h3>{user.name}</h3>
      <h3>{user.login}</h3>
    </div>
  );
}

export default App;
