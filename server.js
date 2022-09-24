const express = require("express");

//requiring body parser to read the data send through post req
const bodyParser = require("body-parser");

const app = express();

//using the body parser
app.use(bodyParser.urlencoded({ extended: true }));

//Sending our html file using the sendFile method
app.get("/", function (req, res) {
  res.sendFile(`${__dirname}/index.html`);
});

//Sending BMI html file to the server at route /bmi
app.get("/bmicalculator", function (req, res) {
  res.sendFile(`${__dirname}/bmiCalculator.html`);
});

//Handling POST requests from index html
app.post("/", function (req, res) {
  console.log(req.body);
  let num1 = +req.body.num1;
  let num2 = +req.body.num2;

  let result = num1 + num2;

  res.send(`Data sent successfully, the result is ${result}`);
});

//Handling post request from bmiCalculator.html
app.post("/bmicalculator", function (req, res) {
  console.log(req.body);
  let height = +req.body.h;
  let wieght = +req.body.w;

  let bmi = wieght / Math.pow(height, 2);

  res.send(`Data sent successfully, your bmi is ${bmi.toPrecision(4)}`);
});

//server running at port 3000
app.listen("3000", function () {
  console.log("server started at port 3000");
});
