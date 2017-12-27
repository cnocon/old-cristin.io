#!/usr/bin/env nodejs
/*var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>I am currently converting my website into a Node application. I apologize for the mess while I finish that up.</h1>');
}).listen(8080, 'localhost');
console.log('Server running at http://localhost:8080/');*/

var http = require('http'),
    fs = require('fs');

fs.readFile('./index.html', function (err, html) {
  if (err) {
    throw err;
  }
  http.createServer(function(req, res) {
    res.writeHeader(200, {"Content-Type": "text/html"});
    res.write(html);
    res.end();
  }).listen(8080, 'localhost');
});
console.log('Server running at http://localhost:8080/');

