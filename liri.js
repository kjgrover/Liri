
var env = require('dotenv').config()
var Twitter = require('twitter');
var Spotify = require('node-spotify-api')
var keys = require('./keys.js')
// var spotifyKey = new Spotify(keys.spotify);
var T = new Twitter(keys.twitter);
var fs = require("fs");
var commandTwit = process.argv[2];
var screenName = process.argv.slice(3).join(" ");
var params = {
    screen_name: "",
}
if (process.argv.length < 3) {
    console.log("Error: No command entered");
    return
} else if (process.argv.length < 4) {
    console.log("Error: No input entered");
    return
}
console.log("Command: " + commandTwit);
console.log("Input: " + screenName);
T.get('statuses/user_timeline', screenName, function (error, tweets, response) {
    if (!error) {
        console.log(tweets.length);
        console.log(tweets[0].created_at + " - " + tweets[0].text);
        for (let i = 0; i < tweets.length; i++) {
            console.log(tweets[i].created_at + " - " + tweets[i].text);
        }
    } else {
        console.log(error)
    }
});


///OMDB API Call
var OMDB = require('OMDBapi');
var request = require("request");
var command = process.argv[2];
var input = process.argv.slice(3).join(" ");
// We then run the request module on a URL with a JSON
request("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy", function (error, response, body) {
    // If there were no errors and the response code was 200 (i.e. the request was successful)...
    if (process.argv.length < 3) {
        console.log("Error: No command entered");
        return
    } else if (process.argv.length < 4) {
        console.log("Error: No input entered");
        return
    }
    console.log("Command: " + command);
    console.log("Input: " + input);
    if (!error && response.statusCode === 200) {
        //     Title of the movie.
        console.log("Title: " + JSON.parse(body).Title);
        //     * Year the movie came out.
        console.log("Year: " + JSON.parse(body).Year);
        //     * IMDB Rating of the movie.
        console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
        //     * Rotten Tomatoes Rating of the movie.
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Rated);
        //     * Country where the movie was produced.
        console.log("Country: " + JSON.parse(body).Country);
        //     * Language of the movie.
        console.log("Language: " + JSON.parse(body).Language);
        //     * Plot of the movie.
        console.log("Plot: " + JSON.parse(body).Plot);
        //     * Actors in the movie.
        console.log("Actors In the Movie: " + JSON.parse(body).Actors);
        //   ```
        // * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
    }
});
