
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ss020708',
    database: 'minor'
  });
module.exports = connection;