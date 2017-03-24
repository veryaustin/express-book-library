var express = require('express');

// Instatiate and instance of express
var app = express();

// Set Port
var port = process.env.PORT || 5000;

// Router
var bookRouter = express.Router();

// Book Routes

// Smaple data for books
var books = [
  {
    title: 'War and Peace',
    genre: 'Historical Fiction',
    author: 'Lev Nikolayevich Tolstoy',
    read: false
  },
  {
    title: 'Les Miserables',
    genre: 'Historical Fiction',
    author: 'Vicotr Hugo',
    read: false
  },
  {
    title: 'The Time Machine',
    genre: 'Science Fiction',
    author: 'H. G. Wells',
    read: false
  }
];

bookRouter.route('/')
  .get(function(req, res) {
    res.render('books', {
      title: 'Books',
      nav: [{
        link: '/books',
        title: 'Books'
      }, {
        link: '/authors',
        title: 'Authors'
      }],
      books: books
    });
  });

bookRouter.route('/single')
  .get(function(req, res) {
    res.send('Hello Single Book');
  });

// User the bookRouter for /books
app.use('/books', bookRouter);

// Setup Static Directories
app.use(express.static('public'));
app.set('views', 'src/views');

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