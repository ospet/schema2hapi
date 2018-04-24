var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    name: {type: String},
    author: {type: String, custom: true, put: false},
    isbn: String
  }, 
  {collection: 'books'}
);

module.exports = mongoose.model('BookModel', bookSchema);
