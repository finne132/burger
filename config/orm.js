"use strict";

// Import (require) connection.js into orm.js
var connection = require("../config/connection.js");

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
var orm ={
    all: function(table, callback){
      var queryString = 'SELECT * FROM ' + table;
  
      connection.query(queryString, function(err, data){
        if(err) throw err;
        callback(data);
      });
    },

    // insertOne function - create 1 new burger with the input parameters)
    create: function(table, column, burgerInput, callback){
        var queryString = 'INSERT INTO ' + table + '(' + column + ') VALUES (?)';

        connection.query(queryString, [burgerInput], function(err, data){
        if(err) throw err;
        callback(data);
        });
    },

    // update an existing burger to show that it was eaten
    update: function(table, col, colVal, condition, conditionVal, callback){
        var queryString = 'UPDATE ' + table + ' SET ' + col + '=?' + 'WHERE ' + condition + '=?';

        connection.query(queryString, [colVal, conditionVal], function(err, data){
        if(err) throw err;
        callback(data);
        });
    }
};

// Export the ORM object in module.exports
module.exports=orm;
