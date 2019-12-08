require("dotenv").config();
var axios = require("axios");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var input = process.argv.slice(3).join("+");

//first command. Assignment calls for only one to be made but I am building it to take multiple commands in the future.

if (command == "spotify-this-song") {
  if (input != "") {
    spotify
      .request(
        "https://api.spotify.com/v1/search?query=" +
          input +
          "&type=track&offset=0&limit=1"
      )
      .then(function(data) {
        //console.log(JSON.stringify(data, null, 2));
        console.log(data.tracks.items[0].artists[0].name);
      })
      .catch(function(err) {
        console.error("Error occurred: " + err);
      });
  } else {
    console.log("No song was provided, so here is The Sign!\n");

    spotify
      .request(
        "https://api.spotify.com/v1/search?query=" +
          "The+Sign" +
          "&type=track&offset=0&limit=20"
      )
      .then(function(data) {
        console.log(data);
      })
      .catch(function(err) {
        console.error("Error occurred: " + err);
      });
  }
} else {
  console.log('"' + command + '" is not a recognized command!');
}



