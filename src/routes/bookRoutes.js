var express = require('express');
var bookRouter = express.Router();

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
  .get(function (req, res) {
    res.render('bookListView', {
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

bookRouter.route('/:id')
  .get(function (req, res) {
    var id = req.params.id;
    res.render('bookView', {
      title: 'Books',
      nav: [{
        link: '/books',
        title: 'Books'
      }, {
        link: '/authors',
        title: 'Authors'
      }],
      book: books[id]
    });
  });

module.exports = bookRouter;