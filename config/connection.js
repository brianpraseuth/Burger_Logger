// Set up MySQL connection.
var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
  // Database is JawsDB on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
 main
  host: "d6q8diwwdmy5c9k9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
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