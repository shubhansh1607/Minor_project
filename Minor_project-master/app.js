
const connection = require('./connection');
const express = require('express');
const ejs = require('ejs');
const app = express();


/*
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
*/

// app.get("/",function(req,res){
//   if(error) throw error;
//   res.send("This is from server side");
// })

// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });

app.get('/', (req, res) => {
  //res.sendFile(__dirname + '/form.html');
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
