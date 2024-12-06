// core module imports 
const http = require('http');

// third party imports
const express = require('express');

const app = express()

// middleware
app.use('/users', (req, res, next) => {
  console.log('In the middleware')
  res.send('<h1>User Page</h1>')
})

app.use('/', (req, res, next) => {
  console.log('In another middleware')
  res.send('<h1>Practicing Express</h1>')
})

// create server 
const server = http.createServer(app)

// listen on port 4000
server.listen(3000)