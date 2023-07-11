const express = require('express');
const cors = require('cors');

// ROUTER API
const routerApi = require('./api/components/server');

// GRAPHQL API
const useGraphQL = require('./api/graphql/');

// MIDDLEWARE
const {
  logHandler,
  errorHandler,
  boomErrorHanlder,
  sequelizeErrorHandler,
} = require('./middleware/err.handler');

const createApp = async () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.get('/', (_, res) => {
    res.status(200).send({
      message: 'Welcome to the API Task Management System',
    });
  });

  // ROUTER API
  routerApi(app);

  // GRAPHQL API
  await useGraphQL(app);

  // MIDDLEWARE
  app.use(logHandler);
  app.use(boomErrorHanlder);
  app.use(sequelizeErrorHandler);
  app.use(errorHandler);

  return app;
};

module.exports = { createApp };
