const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_complete', 'root', 'rootroot', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
