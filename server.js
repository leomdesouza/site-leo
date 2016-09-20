'use strict';

var express = require('express');
var config = require('./config.js');
var morgan = require('morgan');

var app = express();


app.use(morgan('dev'));
app.use(express.static(__dirname + '/views/home'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'views', 'home', 'index.html'));
});

app.listen(config.port, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log('server is running on port ' + config.port);
    }
});