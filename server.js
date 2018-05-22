"use strict";

// requires
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var port = 8080;
var app = express();

// serve content from public directory
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);
console.log("the server has started and the app is listening. Open a web browser and navigate to localhost:8080 to view the app")
