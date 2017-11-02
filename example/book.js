var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    name: {type: String, truc: 'machin'},
    author: {type: String, custom: true, put: false},
    isbn: String
  }, 
  {collection: 'books'}
);

module.exports.schema = bookSchema;
module.exports.model = mongoose.model('BookModel', bookSchema);
