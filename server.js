// var app = require("express")();
// var server = require("http").Server(app);
var path = require("path");
var serveStatic = require("serve-static");

// server.listen(process.env.PORT || 2000);



var express = require('express');
var app = express();

app.get('/', function (req, res) {
	 app.use(serveStatic(path.join(__dirname, "/")));
  	// res.send("index.html");
  	res.sendFile(path.join(__dirname+'/index.html'));
  	 // res.sendFile('index.html');
});

app.listen(process.env.PORT || 2000, function () {
  console.log('Example app listening on port 3000!');
});
