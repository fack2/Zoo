const http = require('http');
const router = require("./router");

const server = http.createServer(router);
const PORT = process.env.PORT || 4000;

server.listen(PORT);

console.log("server running on:" + PORT);