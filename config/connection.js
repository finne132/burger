"use strict";

// require mysql
var mysql = require("mysql");

// create a new databsae connection to the burgers_db
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});

// initiate the connection
connection.connect(function(err) {
  if (err) {
    console.error("The program encountered an error connecting to the database: " + err.stack);
    return;
  }
  console.log("Successfully connected to the database with ID " + connection.threadId);
});

// export the connection for the ORM to use
module.exports = connection;