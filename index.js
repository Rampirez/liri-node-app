var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "8565e837cf534ee58d6e0cf4f4ebd096",
  secret: "42609dc005304eb88cb40d45d3fc91e9"
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});