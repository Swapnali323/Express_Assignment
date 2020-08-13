var express = require("express");
var bodyParser = require('body-parser')
var app = express();

app.set('view engine','ejs')

var urlencodedParser = bodyParser.urlencoded({ extended: true })

var data =[{item:"bags", price:1000},{item:"shirts", price:800},{item:"Shoes", price:4000}]

app.get("/items", function(req, res) {
   
  res.render('items',{list:data});
});

app.get("/items/:name", function(req, res) {
  
  // data = data.filter(function(todo){
  //   return todo.item;
  //   })
  as =req.query.item
  res.render('itemByName',{list:as})
  console.log(as)
});

// app.post("/item", urlencodedParser,function(req, res) {
//     var items={ item:"bags", price:1000}
//   res.render("items",{items:items});
// });

app.listen(3000)