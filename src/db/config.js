// config, contiene un archivo de configuración, que le dice a CLI cómo conectarse con la base de datos
const { config } = require('../config/config');

module.exports = {
  development: {
    url: config.uriDb,
    dialect: 'postgres',
  },
  production: {
    url: config.uriDb,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};
