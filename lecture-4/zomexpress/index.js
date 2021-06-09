let express = require("express");
let ebt = require("express-bearer-token");
let cors = require("cors");

let app = express();

let admin = require("firebase-admin");
let serviceAccount = require("./service.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(ebt());
app.use(cors());

app.use(function (req, res, next) {
  if (req.token) {
    let token = req.token;
    console.log(token);
    admin
      .auth()
      .verifyIdToken(token)
      .then(function (resposne) {
        console.log(resposne);
        next();
      })
      .catch(function (error) {
        console.log(error);
        res.sendStatus(401);
      });
  } else {
    res.sendStatus(401);
  }
});

app.get("/search", function (req, res) {
  res.send("Welcome to Code for Cause");
});

app.listen(5000, function (error) {
  if (!error) {
    console.log("App started at port 5000");
  } else {
    console.log(error);
  }
});
