var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.set('view engine','ejs')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/form', function(req, res) {
    
    res.render("form")
    })
    
app.post('/path', urlencodedParser,function(req, res) {
 
   var data= req.body.str.split('').reverse().join('')
    res.send("The reversed string is "+ " ' "+data+" ' ")
    })

    app.listen(3000)