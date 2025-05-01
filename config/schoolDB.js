const mysql = require('mysql2');
require('dotenv').config();

const connectionURL = "mysql://root:ulZyGUYRhCXvhINcpFRqOMTItjkFbREc@metro.proxy.rlwy.net:59314/railway";

const connection = mysql.createConnection(connectionURL);

// const schoolPool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   waitForConnections: true,
//   connectionLimit: 10,
// });

module.exports = connection;