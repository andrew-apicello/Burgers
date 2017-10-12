// Set up MySQL connection.
var mysql = require("mysql");
var connnection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  port: 3306,
  host: "b4e9xxkxnpu2v96i.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "sz9jwz1yrx3n99p5",
  password: "om81nzx8up7so65i",
  database: "k0zeb0mjoxaeao6k"
});
};

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


  port: 3306,
  host: "b4e9xxkxnpu2v96i.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "sz9jwz1yrx3n99p5",
  password: "om81nzx8up7so65i",
  database: "cat_db"
});


