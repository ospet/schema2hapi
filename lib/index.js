var controllers = require('./controllers');
var routes = require('./routes');

var generateAPI = (server, models, options) => {
  console.log('generating API...');
  models.forEach((model) => {
    console.log(`--> ${model.collection.name}`);
    var ctrl = controllers.generateController(model, options);
    //console.log(`${JSON.stringify(model.modelema)}`);
    routes.generateRoutes(server, model, ctrl, options);
  });
};

module.exports.generateAPI = generateAPI;
