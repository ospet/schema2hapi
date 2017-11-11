var Joi = require('joi');

var generateRoutes = (server, schema, controller, options) => {
  var entity = schema.schema.options.collection;
  console.log(`create routes for schema ${entity}:`);
  console.log(`  POST for ${entity}`);
  server.route({
    method: 'POST',
    path: `/${entity}`,
    handler: controller.create
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
    handler: controller.update,
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
    handler: controller.remove,
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