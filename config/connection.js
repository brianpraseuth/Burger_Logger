// Set up MySQL connection.
// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "d6q8diwwdmy5c9k9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//   port: 3306,
//   user: "a48z08xcdxuc5bkb",
//   password: "rb3qymqnv60nme1f",
//   database: "q9pqdwijcjxx3y3f"
// });

//if we are on Heroku and the JawsDB addon is configured, we will have the environment variable JAWSDB_URL
//this variable will contain what mysql package needs to connect :)
require('dotenv').config();
var mysql = require('mysql');
var connection;
if(process.env.JAWSDB_URL) {  
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //otherwise, we're going to use our local connection!  put your local db set stuff here
  //(and remember our best practice of using the dotenv package and a .env file ;)
  connection = mysql.createConnection({
    host: "d6q8diwwdmy5c9k9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "a48z08xcdxuc5bkb",
    password: "rb3qymqnv60nme1f",
    database: "q9pqdwijcjxx3y3f"
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;