var express = require('express');
var app = express();

const path = require('path');
const port = 8080;

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public/'));

app.get('/', function(req,res){
    res.render(path.join(__dirname, '/views/index.ejs'));
})

app.get('/index', function(req,res){
    res.render(path.join(__dirname, '/views/index.ejs'));
})

app.get('/projects', function(req,res){
    res.render(path.join(__dirname, '/views/projects.ejs'));
})

app.get('/contact', function(req,res){
    res.render(path.join(__dirname, '/views/contacts.ejs'));
})


app.listen(port)
