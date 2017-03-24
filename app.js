var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');

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
var adminRouter = require('./src/routes/adminRoutes')(nav);
var authRouter = require('./src/routes/authRoutes')(nav);

// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret: 'B9A306A3CE4AD2A3BF3CD1D3E76C212B45ED5596ABE0E8E580881852DDFC53F9'}));
require('./src/config/passport')(app);

// Static
app.set('views', 'src/views');

// Use the bookRouter for /books
app.use('/books', bookRouter);

// Use the adminRouter for /admin
app.use('/admin', adminRouter);

// Use the authRouter for /auth
app.use('/auth', authRouter);

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