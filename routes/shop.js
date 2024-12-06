// routes for the customer view

const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
  res.send('<h1>Praciticing Express!</h1>')
})

module.exports = router