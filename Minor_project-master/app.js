
const mysql = require('mysql');
const express = require('express');
const ejs = require('ejs');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ss020708',
  database: 'minor'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    const query = 'SELECT * FROM co';
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error retrieving data from MySQL database:', error);
            res.send('Error retrieving data from MySQL database.');
        } else {
            res.render('index', { data: results });
        }
    });
});


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
