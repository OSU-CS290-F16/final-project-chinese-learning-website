var path = require("path");
var express = require("express");
var exphbs = require("express-handlebars");

var app = express();
var chineseData = require("./chineseData");
var port = process.env.PORT || 3000;

// use handlebars as the view engine for the app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



var express = require("express");
var app = express();
app.get("/", function(req, res) {
  res.send("Hello world!");
});
app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});


