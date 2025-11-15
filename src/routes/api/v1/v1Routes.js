async function v1Plugins(fastify, options) {
  fastify.register(require("./test/testRoutes"), { prefix: "/test" });
}

module.exports = v1Plugins;
