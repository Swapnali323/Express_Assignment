var express = require("express");
var path = require('path')
var app = express();

app.set('views',path.join(process.argv[3]))
app.set('view engine','pug')

app.get("/home", function(req, res) {
  res.render("index" ,{date :  new Date().toDateString()});
});



app.listen(3000) 