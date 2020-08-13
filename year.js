var express = require("express");
var strftime = require("strftime")
var app = express();

app.set('view engine','ejs')
currentYear = strftime("%Y")
console.log(currentYear)

app.get("/year", function(req, res) {
  //  age = req.query.age
   birthYear = currentYear -req.query.age
  res.render('year',{birthYear:birthYear})
});

app.listen(3000)