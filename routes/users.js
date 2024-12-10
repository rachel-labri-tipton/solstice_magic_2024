const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const homeData = require('./home');

const router = express.Router();

router.get('/', (req, res, next) => {
  const users = homeData.users;
  res.render('users', {
    users: users, pageTitle: 'Users List', path: '/users', hasUsers: users.length > 0, 
    activeUsers:  true, userCSS: true
  });
} )


module.exports = router;
