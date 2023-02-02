// requires / imports
const express = require("express");
const morgan = require("morgan");

// iniciamos el servidor // start the server
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//metodos // methods
app.get("/", (req, res) => {
  res.send("hola");
});

app.post("/name", (req, res) => {
  let { name } = req.body;
  console.log(name);
  res.send(name);
});

module.exports = {
  app,
};
