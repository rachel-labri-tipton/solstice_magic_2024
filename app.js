const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const rootDir = require('./util/path');

const app = express();

// import routes from the routes folder
const homeRoutes = require('./routes/home');
const userRoutes = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// use the imported routes
app.use('/', homeRoutes);
app.use(userRoutes);

app.use((req, res, next) => {res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))})

app.listen(3000)