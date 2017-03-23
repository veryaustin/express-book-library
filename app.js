var express = require('express');

// Instatiate and instance of express
var app = express();

// Set Port
var port = 5000;
app.listen(port, function (err) {
  console.log('running server on port ' + port);
});