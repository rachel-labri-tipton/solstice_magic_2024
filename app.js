const http = require('http');
const routes = require('./routes');

console.log(routes.someText);

// if request comes, please execute this function
// createServer callback function that runs anytime a request reaches our server
const server = http.createServer(routes.handler);
// listens for incoming requests on the given port
server.listen(3000);


