const http = require('http');
const router = require("./router");

const server = http.createServer(router);
const port = process.env.PORT || 4000;
const host = process.env.HOST || 'localhost';

server.listen(port);

console.log("server running on: http://" + host + ":" + port);