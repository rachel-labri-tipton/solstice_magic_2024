const http = require('http');

// if request comes, please execute this function
// createServer callback function that runs anytime a request reaches our server
const server = http.createServer((req, res) => {
  console.log("request info", req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
  res.end();
})

// listens for incoming requests on the given port
server.listen(3000);

