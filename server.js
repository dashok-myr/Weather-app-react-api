const express = require("express");
const app = express();
var cors = require("cors");

const register = require("./controllers/register");
const signin = require("./controllers/signin");


require("dotenv").config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({ express: "BACKEND IS RUNNING" });
});

///////////////////////////signin////////////////////////

app.post("/signin", (req, res) => {
  const body = req.body;
  signin
    .signIn(body)
    .then(didSignIn => res.send(didSignIn))
    .catch(err => err);

  console.log("Sign in was hit");
});

/////////////////////////////register////////////////////

app.post("/register", (req, res) => {
  const body = req.body;

  register
    .registerUser(body)
    .then(didSaveUser => res.send(didSaveUser))
    .catch(err => err);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});
