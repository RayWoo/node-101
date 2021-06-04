const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("THis is our short story");
  }
  res.end(`<h1>oops</h1>`);
});

server.listen(5000);

/*
// Modules
const name = require('./4-name')
const sayHi = require('./5-utilis')




sayHi('susan')
sayHi(name.john)
sayHi(name.peter)
//sayHi(secret)
*/
