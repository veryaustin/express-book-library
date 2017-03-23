var express = require('express');

// Instatiate and instance of express
var app = express();

// Set Port
var port = 5000;

// Setup Static Directories
app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function (req, res) {
  res.send('Hello World');
});


app.get('/books', function (req, res) {
  res.send('Hello Books');
});

app.listen(port, function (err) {
  console.log('running server on port ' + port);
});