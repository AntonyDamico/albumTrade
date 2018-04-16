const mongoose = require("mongoose");

var albumSchema = new mongoose.Schema({
  name: String,
  band: String,
  year: Number,
  cover: String
});

module.exports = mongoose.model("Album", albumSchema);
