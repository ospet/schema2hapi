var Joi = require('joi');

var generateRoutes = (server, Model, controller, options) => {
  var entity = Model.collection.name;
  console.log(`create routes for Model ${entity}:`);
  console.log(`  POST for ${entity}`);
  server.route({
    method: 'POST',
    path: `/${entity}`,
    handler: controller.post
  });
  console.log(`  GET for ${entity}`);
  server.route({
    method: 'GET',
    path: `/${entity}`,
    handler: controller.getAll
  });
  console.log(`  GET by id for ${entity}`);
  server.route({
    method: 'GET',
    path: `/${entity}/{id}`,
    handler: controller.getById,
    config: {
      validate: {
        params: {
          id: Joi.string().required()
        }
      }
    }
  });
  console.log(`  PUT for ${entity}`);
  server.route({
    method: 'PUT',
    path: `/${entity}/{id}`,
    handler: controller.put,
    config: {
      validate: {
        params: {
          id: Joi.string().required()
        }
      }
    }
  });
  console.log(`  DELETE for ${entity}`);
  server.route({
    method: 'DELETE',
    path: `/${entity}/{id}`,
    handler: controller.delete,
    config: {
      validate: {
        params: {
          id: Joi.string().required()
        }
      }
    }
  });
}

module.exports.generateRoutes = generateRoutes;