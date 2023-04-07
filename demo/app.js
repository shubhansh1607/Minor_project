const connection = require("./connection");
const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/course_outcome.html");
});

app.post("/", (req, res) => {
  const co1t1 = parseInt(req.body.txtCo1Test1);
  const co1t2 = parseInt(req.body.txtCo1Test2);
  const co1t3 = parseInt(req.body.txtCo1Test3);
  const co1assignment = parseInt(req.body.txtCo1Assignment);
  const co1gp = parseInt(req.body.txtCo1GroupPresentation);
  const co1end = parseInt(req.body.txtCo1EndSemMarks);
  var x1 =
    ((((co1t1 + co1t2 + co1t3 + co1assignment + co1gp) / 80) * 100) + co1end) / 2;

  const co2t1 = parseInt(req.body.txtCo2Test1);
  const co2t2 = parseInt(req.body.txtCo2Test2);
  const co2t3 = parseInt(req.body.txtCo2Test3);
  const co2assignment = parseInt(req.body.txtCo2Assignment);
  const co2gp = parseInt(req.body.txtCo2GroupPresentation);
  const co2end = parseInt(req.body.txtCo2EndSemMarks);
  var x2 =
    (((co2t1 + co2t2 + co2t3 + co2assignment + co2gp) / 80) * 100 + co2end) / 2;

  const co3t1 = parseInt(req.body.txtCo3Test1);
  const co3t2 = parseInt(req.body.txtCo3Test2);
  const co3t3 = parseInt(req.body.txtCo3Test3);
  const co3assignment = parseInt(req.body.txtCo3Assignment);
  const co3gp = parseInt(req.body.txtCo3GroupPresentation);
  const co3end = parseInt(req.body.txtCo3EndSemMarks);
  var x3 =
    (((co3t1 + co3t2 + co3t3 + co3assignment + co3gp) / 80) * 100 + co3end) / 2;

  const co4t1 = parseInt(req.body.txtCo4Test1);
  const co4t2 = parseInt(req.body.txtCo4Test2);
  const co4t3 = parseInt(req.body.txtCo4Test3);
  const co4assignment = parseInt(req.body.txtCo4Assignment);
  const co4gp = parseInt(req.body.txtCo4GroupPresentation);
  const co4end = parseInt(req.body.txtCo4EndSemMarks);
  var x4 =
    (((co4t1 + co4t2 + co4t3 + co4assignment + co4gp) / 80) * 100 + co4end) / 2;

  const co5t1 = parseInt(req.body.txtCo5Test1);
  const co5t2 = parseInt(req.body.txtCo5Test2);
  const co5t3 = parseInt(req.body.txtCo5Test3);
  const co5assignment = parseInt(req.body.txtCo5Assignment);
  const co5gp = parseInt(req.body.txtCo5GroupPresentation);
  const co5end = parseInt(req.body.txtCo5EndSemMarks);
  var x5 =
    (((co5t1 + co5t2 + co5t3 + co5assignment + co5gp) / 80) * 100 + co5end) / 2;

  const co6t1 = parseInt(req.body.txtCo6Test1);
  const co6t2 = parseInt(req.body.txtCo6Test2);
  const co6t3 = parseInt(req.body.txtCo6Test3);
  const co6assignment = parseInt(req.body.txtCo6Assignment);
  const co6gp = parseInt(req.body.txtCo6GroupPresentation);
  const co6end = parseInt(req.body.txtCo6EndSemMarks);
  var x6 =
    (((co6t1 + co6t2 + co6t3 + co6assignment + co6gp) / 80) * 100 + co6end) / 2;
    connection.connect((err) => {
      if (err) {
        console.error("Error connecting to MySQL database: ", err);
      } else {
        console.log("Connected to MySQL database");
        var sql="INSERT INTO directassesment(co1,co2,co3,co4,co5,co6) VALUES('"+x1+"','"+x2+"','"+x3+"','"+x4+"','"+x5+"','"+x6+"')";
        connection.query(sql,function(error,result)
        {
          if(error) throw error;
        });
      }
    });
  res.send("Form submitted successfully");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});