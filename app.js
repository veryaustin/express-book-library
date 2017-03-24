var express = require('express');

// Instatiate and instance of express
var app = express();

// Set Port
var port = process.env.PORT || 5000;

// Navigation
var nav = [{
  link: '/books',
  title: 'Books'
}, {
  link: '/authors',
  title: 'Authors'
}];

var bookRouter = require('./src/routes/bookRoutes')(nav);

// User the bookRouter for /books
app.use('/books', bookRouter);

// Setup Static Directories
app.use(express.static('public'));
app.set('views', 'src/views');

// Set view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Hello from EJS',
    nav: [{
      link:'/books',
      title: 'Books'
    },{
      link: '/authors',
      title: 'Authors'}]
  });
});

app.get('/books', function (req, res) {
  res.send('Hello Books');
});

app.listen(port, function (err) {
  console.log('running server on port ' + port);
});