var express = require("express");
var path = require('path')
var app = express();

app.set('views',path.join(__dirname,'views'))
app.set('view engine','pug')

app.get("/home", function(req, res) {
  date =  new Date().toDateString()
  res.render("pug");
});



app.listen(3000) 