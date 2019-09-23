// var app = require("express")();
// var server = require("http").Server(app);
var path = require("path");
var serveStatic = require("serve-static");

// server.listen(process.env.PORT || 2000);



var express = require('express');
var app = express();

// app.get('/', function (req, res) {
// 	 app.use(serveStatic(path.join(__dirname, "/")));
//   	// res.send("index.html");
//   	res.sendFile(path.join(__dirname+'/index.html'));
//   	 // res.sendFile('index.html');
// });

// app.listen(process.env.PORT || 2000, function () {
//   console.log('Example app listening on port 3000!');
// });


const http = require('http');
const host = '127.0.0.1';
const port = process.env.PORT || 2000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname+'/index.html');
  app.use(serveStatic(path.join(__dirname, "/")));
  // res.sendFile(path.join(__dirname+'/index.html'));
  res.setHeader('Content-Type', 'text/plain');
  // res.sendFile(path.join(__dirname+'/index.html'));
  // res.end('Primer servidor con Node.Js');
});
server.listen(port, host, () => {
  console.log(`Servidor corriendo en http://${host}:${port}`);
});