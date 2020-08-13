var express = require("express");

var app = express();

app.use(express.static('public'))

app.get("/profile", function(req, res) {
  res.sendFile("index.html",{root:__dirname+"/public"});
});

app.listen(3000)