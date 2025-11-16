const http = require("k6/http");
const { sleep } = require("k6");

exports.options = {
  stages: [
    { duration: "10s", target: 200 },
    { duration: "10s", target: 300 },
    { duration: "10s", target: 0 },
  ],
};

exports.default = function () {
  http.get("http://localhost:3000/api/v1/test/ping"); // <---- HTTP NOT HTTPS
  sleep(1);
};
