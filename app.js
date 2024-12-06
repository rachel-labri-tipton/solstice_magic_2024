// core module imports 
const http = require('http');

// third party imports
const express = require('express');
const bodyParser = require('body-parser')

const app = express()

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }))

// middleware

app.use(adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>')
})

// listen on port 4000
app.listen(4000)