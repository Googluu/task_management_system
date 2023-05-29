require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'development',
  isProd: process.env.NODE_ENV === 'production',
  isDev: process.env.NODE_ENV === 'development',
  port: process.env.PORT || 3000,
  uriDb: process.env.URI_POSTGRES,
};

module.exports = { config };
