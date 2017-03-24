var express = require('express');

// Instatiate and instance of express
var app = express();

// Set Port
var port = process.env.PORT || 5000;

// Setup Static Directories
app.use(express.static('public'));
app.set('views', 'src/views');

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', {title: 'Hello from EJS', list: ['a', 'b']});
});

app.get('/books', function (req, res) {
  res.send('Hello Books');
});

app.listen(port, function (err) {
  console.log('running server on port ' + port);
});