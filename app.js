var express = require('express');
var app = express();

app.get('/', function(req,res){
	res.send('Test Data');
});

app.listen(port = 3000,function(err,res){
	console.log("Server running on port " + port);
});