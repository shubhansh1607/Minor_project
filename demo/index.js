const connection = require("./connection");
const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/program_survey_form.html");
});

app.post("/", (req, res) => {
  const po1 = parseInt(req.body.txtPo1Rating);
  const po2 = parseInt(req.body.txtPo2Rating);
  const po3 = parseInt(req.body.txtPo3Rating);
  const po4 = parseInt(req.body.txtPo4Rating);
  const po5 = parseInt(req.body.txtPo5Rating);
  const po6 = parseInt(req.body.txtPo6Rating);
  const po7 = parseInt(req.body.txtPo7Rating);
  const po8 = parseInt(req.body.txtPo8Rating);
  const po9 = parseInt(req.body.txtPo9Rating);
  const po10 = parseInt(req.body.txtPo10Rating);
  const po11 = parseInt(req.body.txtPo11Rating);
  const po12 = parseInt(req.body.txtPo12Rating);
  const pso1 = parseInt(req.body.txtPso1Rating);
  const pso2 = parseInt(req.body.txtPso2Rating);
  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL database: ", err);
    } else {
      console.log("Connected to MySQL database");
      var sql =
        "INSERT INTO popes VALUES('" +
        po1 +
        "','" +
        po2 +
        "','" +
        po3 +
        "','" +
        po4 +
        "','" +
        po5 +
        "','" +
        po6 +
        "','" +
        po7 +
        "','" +
        po8 +
        "','" +
        po9 +
        "','" +
        po10 +
        "','" +
        po11 +
        "','" +
        po12 +
        "','" +
        pso1 +
        "','" +
        pso2 +
        "')";
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
