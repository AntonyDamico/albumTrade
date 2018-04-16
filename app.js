// paquetes
const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose");

// Modelos
const Album = require("./models/album");

// Seed
seedDB = require("./seed");
seedDB();

// Config
mongoose.connect("mongodb://localhost/vinyl_trade");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

// Rutas
app.get("/", function(req, res) {
  res.render("landing");
});

// INDEX
app.get("/index", function(req, res) {
  Album.find({}, function(err, allAlbums) {
    if (err) {
      console.log(err);
    } else {
      res.render("index", { albums: allAlbums });
    }
  });
});

app.listen(3000, function() {
  console.log("conectado en servidor 3000");
});
