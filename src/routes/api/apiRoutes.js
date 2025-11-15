const apiPlugins = async (fastify, Option) => {
  fastify.register(require("./v1/v1Routes"), { prefix: "/v1" });
};

module.exports = apiPlugins;
