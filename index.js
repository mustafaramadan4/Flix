const mysql = require('mysql');

var connection = mysql.createConnection({
  host: "flixmysqldb2.cmpbc10hqhyn.us-west-2.rds.amazonaws.com",
  user: "admin",
  password: "flixmysqldb2",
  port: 3306
});

var sql = "SELECT * FROM flixmysqldb2.users_test";

connection.connect(function(err) {
  if(err) {
    console.error('DB connection failed' + err.stack);
    return;
  }
  console.log('DB connection successful!')

  connection.query(sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    console.log(results);
    connection.end();
  });
});