const { Sequelize } = require('sequelize');

module.exports = new Sequelize('delivery', 'postgres', 'qqqwww', {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
});
