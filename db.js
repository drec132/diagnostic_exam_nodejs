const mysql = require('mysql');
const config = require('./config');

const conn = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
});


conn.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = conn
