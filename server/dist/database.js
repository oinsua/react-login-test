"use strict";

var mysql2 = require('mysql2');

var {
  HOST,
  USER,
  PASSWORD,
  DATABASE,
  PORT
} = require('./jsconfig');

var connect = () => {
  try {
    var connection = mysql2.createConnection({
      host: HOST,
      user: USER,
      password: PASSWORD,
      database: DATABASE,
      port: PORT,
      connectionLimit: 10
    });
    connection.connect(function (error) {
      if (error) {
        console.log("db is not connected, error: ".concat(error));
      } else {
        console.log('db is connected.');
      }
    });
    return connection;
  } catch (error) {
    console.log("db is not connected, error: ".concat(error));
  }
};

module.exports = connect;