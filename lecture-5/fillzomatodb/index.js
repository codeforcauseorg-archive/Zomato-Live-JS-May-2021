let fs = require("fs");
let axios = require("axios");

let data = fs.readFileSync("./alexa.png", { encoding: "base64" });

axios
  .post("http://localhost:3000/images/", {
    name: "alexa.png",
    content: data,
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
