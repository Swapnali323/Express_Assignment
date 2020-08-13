const fs = require("fs");
var express = require("express");

port = process.argv[2];
filename = process.argv[3];

var app = express();

var file = fs.readFileSync(filename);

app.get("/books", function (req, res) {
  let book = JSON.parse(file);
  res.json(book);
});

app.listen(port);
