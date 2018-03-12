var express = require('express')
var app = express();

var jsonData = {count: 12, message: 'hey'};

// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data


var fs = require('fs');

app.get('/', function(req, res){
  fs.readFile('index.html', function(err, buffer){
    var html = buffer.toString();
    res.setHeader('Content-Type', 'text/html')
    res.send(html);
  });
});

// app.get('/', function(req, res){
//   fs.readFile('index.html', function(err, buffer) {
//     var html = buffer.toString();
//     res.
//   });
// });

// app.get('/', function(req, res){
//
//   res.sendFile(__dirnname + '/index.html', function(err){
//     if (err){
//       res.status(500).send(err);
//     }
//   });
// });
app.get('/data', function(req, res){
  res.json(jsonData);
});

//
var port = 3000;
app.listen(port, function(){
  console.log('listening on http://localhost:', port);
});
