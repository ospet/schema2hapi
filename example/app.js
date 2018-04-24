var schema2api = require('../index');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tests2h');
const Hapi = require('hapi');

const init = async () => {
  const server = new Hapi.Server({
    port: 8090
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => ({msg: 'this is a test'})
  });

  const options = {};
  var models = [
    require('./book'),
    require('./user')
  ];
  schema2api.generateAPI(server, models, options);

  await server.start();
  return server;
};

init().then(server => {
  console.log('Server running at:', server.info.uri);
})
.catch(error => {
  console.log(error);
  process.exit(0);
});

