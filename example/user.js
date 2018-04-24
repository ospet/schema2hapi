var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    gender: {type: String, enum: ['F', 'M']}
  }, 
  {collection: 'users'}
);

module.exports = mongoose.model('UserModel', userSchema);
