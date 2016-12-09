var path = require("path");
var express = require("express");
var exphbs = require("express-handlebars");

var app = express();
var characters = require("./characters");
var port = process.env.PORT || 3000;

// use handlebars as the view engine for the app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// serve static files from public/
app.use(express.static(path.join(__dirname, "public")));
// set views
app.set("views", path.join(__dirname, "views"));
  

// state variable to store character set currently being used
var currentSet = "1";

// state variable to store position of current character being viewed
var currentChar = 0;

// state variable to store position of current pronunciation being viewed
var currentPron = 1;

// state variable to store position of current meaning being viewed
var currentMean = 2;

// route root path to index page, and give handlebars the appropriate page
// title and chinese data to render
app.get("/", function(req, res) {
  res.render("main", {
    title: "Chinese Learning App",
    characters: characters,
    currentSet: currentSet,
    currentChar: currentChar,
    currentPron: currentPron,
    currentMean: currentMean
  });
});

// return a 404 and render the 404 page for any other route
app.get("*", function(req, res) {
  res.status(404).render("404page", { title: "Page not found" });
});

// listen on the specified port
app.listen(port, function() {
  console.log("== Listening on port", port);
});

