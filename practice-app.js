// import core node module 
const http = require('http');

// create server  with req, res logic 
const server = http.createServer((req, res) => {
  const url = req.url;
  // create routes
  // form to add user
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    res.write(
      '<body><h2>Add User</h2><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Add</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  // list of users
  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
    res.write('</html>');
    return res.end();
  }
  // add user page that returns page not found
  if (url === '/create-user') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split('=')[1]); // username=whatever-the-user-entered
    });
    res.statusCode = 302;
    res.setHeader('Location', '/create-user');
    res.end();
  }
});

// listen for incoming requests on port 3000
server.listen(3000);