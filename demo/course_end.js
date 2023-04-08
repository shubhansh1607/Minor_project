const connection = require("./connection");
const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/student_course_feedback.html");
});

app.post("/", (req, res) => {
    const co1 = parseInt(req.body.txtCo1Rating);
    const co2 = parseInt(req.body.txtCo2Rating);
    const co3 = parseInt(req.body.txtCo3Rating);
    const co4 = parseInt(req.body.txtCo4Rating);
    const co5 = parseInt(req.body.txtCo5Rating);
    const co6 = parseInt(req.body.txtCo6Rating);

    connection.connect((err) => {
        if (err) {
            console.error("Error connecting to MySQL database: ", err);
        } else {
            console.log("Connected to MySQL database");
            var sql = "INSERT INTO courseend VALUES('" + co1 + "','" + co2 + "','" + co3 + "','" + co4 + "','" + co5 + "','" + co6 + "')";
            connection.query(sql, function (error, result) {
                if (error) throw error;
            });
        }
    });
    res.send("Form submitted successfully");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});