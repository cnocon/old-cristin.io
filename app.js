#!/usr/bin/env nodejs
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>I am currently converting my website into a Node application. I apologize for the mess while I finish that up.</h1>');
}).listen(8080, 'localhost');
console.log('Server running at http://localhost:8080/');
