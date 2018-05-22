"use strict";

// Import the ORM 
var orm = require("../config/orm.js");

// call the ORM functions using burger specific input for the ORM
var burger = {
    selectAll: function(cb){
      orm.selectAll('burgers', function(res){
        cb(res);
      });
    },
    insertOne: function(val, cb){
      orm.insertOne('burgers', 'burger_name', val, function(res){
        cb(res);
      });
    },
    updateOne: function(colVal, conditionVal, cb){
      orm.updateOne('burgers', 'devoured', colVal, 'id', conditionVal, function(res){
        cb(res);
      });
    },
    deleteOne: function(conditionVal, cb){
      orm.deleteOne('burgers', 'id', conditionVal, function(res){
        cb(res);
      });
    }
  };

// Export the database functions
module.exports = burger;