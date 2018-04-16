// paquetes
const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose");

// Modelos
const Album = require("./models/album");

// Config
mongoose.connect("mongodb://localhost/vynil_trade");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

// Rutas
app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/index", function(req, res) {
  res.render("index");
});

app.listen(3000, function() {
  console.log("conectado en servidor 3000");
});
