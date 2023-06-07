const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models');

const options = {
  dialect: 'postgres',
  logging: config.isDev ? console.log : false,
};

if (config.isProd) {
  options.ssl = {
    rejectUnauthorized: false,
  };
}

console.log(options);

const sequelize = new Sequelize(config.uriDb, options);

setupModels(sequelize);

module.exports = sequelize;
