const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const users = [];

// /admin/add-user => GET
router.get('/add-user', (req, res, next) => {
  res.render('add-user', {
    pageTitle: 'Add user',
    path: '/home/add-user',
    formsCSS: true,
    userCSS: true,
    activeAdduser: true
  });
});

// /admin/add-user => POST
router.post('/add-user', (req, res, next) => {
  users.push({ title: req.body.title });
  res.redirect('/');
});

console.log(users)

exports.routes = router;
exports.users = users;