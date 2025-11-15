const TestService = require("../services/testService");

const testService = new TestService();

const pingRequest = async (req, res) => {
  const response = await testService.pingCheck();
  return res.status(200).send({ data: response });
};

module.exports = {
  pingRequest,
};
