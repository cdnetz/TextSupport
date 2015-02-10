var express = require('express');
var bodyParser = require('body-parser');
var firebase = require('firebase');
var twilio = require('twilio');

var app = express();

// var myFirebaseRef = new Firebase("https://textsupportcn.firebaseio.com/")

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.listen(9000);