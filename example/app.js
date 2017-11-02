var schema2api = require('../index');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tests2h');

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

const options = {};

var schemas = [
  require('./book'),
  require('./user')
];

schema2api.generateAPI(server, schemas, options, (err) => {
  if(err) {
    console.log(err);
  }
  console.log('API ready to be used');
});

server.start();
