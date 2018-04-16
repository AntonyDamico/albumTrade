const mongoose = require("mongoose"),
  Album = require("./models/album");

var data = [
  {
    name: "Sgt. Peppers Lonely Hearts Club Band",
    band: "The Beatles",
    year: 1967,
    cover:
      "https://lastfm-img2.akamaized.net/i/u/300x300/5a63743f4ba244678b74d90ad868504f.png"
  },
  {
    name: "2",
    band: "Mac Demarco",
    year: 2012,
    cover:
      "https://lastfm-img2.akamaized.net/i/u/300x300/0fd4ea33ee02465cc66904460ee8e91d.png"
  },
  {
    name: "Meddle",
    band: "Pink Floyd",
    year: 1971,
    cover:
      "https://lastfm-img2.akamaized.net/i/u/300x300/55dc29cfc3264ee3cee981181ddead2a.png",
  },
];

function seedDB() {
  // Quitando Albumes
  Album.remove({}, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Albumes removidos");
      // Agregando Albumes
      data.forEach(function(seed) {
        Album.create(seed, function(err, album) {
          if (err) {
            console.log(err);
          } else {
            console.log("Album añadido");
          }
        });
      });
    }
  });
}

module.exports = seedDB;
