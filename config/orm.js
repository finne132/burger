"use strict";

// Import (require) connection.js into orm.js
var connection = require("../config/connection.js");

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
var orm ={
    selectAll: function(table, callback){
      var queryString = 'SELECT * FROM ' + table;
  
      connection.query(queryString, function(err, data){
        if(err) throw err;
        callback(data);
      });
    }
}

// selectAll()
// insertOne()
// updateOne()


// Export the ORM object in module.exports


