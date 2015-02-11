var express = require('express');
var bodyParser = require('body-parser');
var firebase = require('firebase');
var twilio = require('twilio')('AC218317115a25009a97a6c7cc3e0cd998', '1066b9098818f925fd6f7b9372d9b7e8');

var app = express();

// var myFirebaseRef = new Firebase("https://textsupportcn.firebaseio.com/")

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.post('/support/messages', function (req, res) {
	twilio.sendMessage({
		to: "+14144264190",
		from: "+12623736948",
		body: req.body.body
	}, function(err, responceData) {
		if (!err) {
			console.log(responceData.from);
			console.log(responceData.body);
		}
	});
})


app.listen(9000);