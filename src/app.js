const fastifyPlugins = require("fastify-plugin");
const cors = require("@fastify/cors");

const servicePlugin = require("./services/servicePlugin");


// plugins are promise based in fastify, so use async await.
async function app(fastify, options) {
  fastify.register(cors, {});
  fastify.register(servicePlugin);

  // register test routes\
  fastify.register(require("./routes/api/apiRoutes"), { prefix: "/api" });
}

module.exports = fastifyPlugins(app);
