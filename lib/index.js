var generateAPI = (server, schemas, options, callback) => {
  console.log('generating API...');
  schemas.forEach((sch) => {
    console.log(`--> ${sch}`);
    //console.log(`${JSON.stringify(sch.schema)}`);
    console.log(`/${sch.schema.options.collection}`);
    server.route({
      method: 'GET',
      path: `/${sch.schema.options.collection}`,
      handler: (request, reply) => {
        return reply('hello world');
      }
   })
  });
  callback();
};

module.exports.generateAPI = generateAPI;
