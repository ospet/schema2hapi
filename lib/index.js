var controllers = require('./controllers');
var routes = require('./routes');

var generateAPI = (server, schemas, options) => {
  console.log('generating API...');
  schemas.forEach((sch) => {
    console.log(`--> ${sch}`);
    var ctrl = controllers.generateController(server, sch, options);
    //console.log(`${JSON.stringify(sch.schema)}`);
    console.log(`/${sch.schema.options.collection}`);
    routes.generateRoutes(server, sch, ctrl, options);
  });
};

module.exports.generateAPI = generateAPI;
