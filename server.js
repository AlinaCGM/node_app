const http = require("http");

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Hello, this is get response");
};

const server = http.createServer(requestListener);
server.listen(5000);
