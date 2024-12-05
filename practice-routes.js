const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Add User</title></head>');
    res.write('<body><form action="/users" method="POST"><input type="text" name = "user"><button>Add</button></form></body>');
    res.write('</html>');
    return res.end();
   }
  
  if (url === '/users' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk)
      body.push(chunk)
    })
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      const user = parsedBody.split('=')[1]
      console.log(parsedBody)
      fs.writeFile('user.txt', user, err => {
        res.statusCode = 302;
        return res.end();
      } );
      
    })
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Users Page</title></head>');
  res.write('<body><h1>Here are the users!</h1><ul><li>User1</li><li>User2</li></ul></body>');
  res.write('</html>');
  res.end();
}

exports.handler = requestHandler;

