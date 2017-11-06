var generateRoutes = (server, schema, controller, options) => {
  console.log(`create routes for schema ${schema.schema.options.collection}`)
  server.route({
    method: 'POST',
    path: `/${schema.schema.options.collection}`,
    handler: controller.create
  });
  server.route({
    method: 'GET',
    path: `/${schema.schema.options.collection}`,
    handler: controller.getAll
  });
}

module.exports.generateRoutes = generateRoutes;