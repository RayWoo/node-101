const http = require("http");

const server = http.createServer();

//https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_class_http_server
server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);
