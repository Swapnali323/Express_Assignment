var express = require("express");

var app = express();


app.get("/", function(req, res) {
  res.send("Hello World");
});

app.get("/time", function(req, res) {
   var date= new Date().toISOString("YYYY-MM-DDTHH:mm:ssZZ")
    res.send(date);
  });

// app.listen(3000)