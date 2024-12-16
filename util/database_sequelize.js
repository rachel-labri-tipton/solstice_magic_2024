// file for the database connection
const Sequelize = require('sequelize');  

const sequelize = new Sequelize('node-db', 'root', 'nodedb', { dialect: 'mysql',
  host: 'localhost'}
)

module.exports = sequelize;

