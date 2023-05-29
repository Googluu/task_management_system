const express = require('express');

//ROUTER
const tasksRouter = require('./api/components/routes/tasks.router');
const usersRouter = require('./api/components/routes/users.router');

// MIDDLEWARE
const {
  logHandler,
  errorHandler,
  boomErrorHanlder,
  sequelizeErrorHandler,
} = require('./middleware/err.handler');

const createApp = () => {
  const app = express();

  app.use(express.json());

  app.get('/', (_, res) => {
    res.status(200).send({
      message: 'Welcome to the API Task management system',
    });
  });

  // ROUTER
  app.use('/api/v1/tasks', tasksRouter);
  app.use('/api/v1/users', usersRouter);

  // MIDDLEWARE
  app.use(logHandler);
  app.use(boomErrorHanlder);
  app.use(sequelizeErrorHandler);
  app.use(errorHandler);

  return app;
};

module.exports = { createApp };
