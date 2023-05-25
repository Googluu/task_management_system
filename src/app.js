const express = require('express');

//ROUTER
const tasksRouter = require('./api/components/routes/tasks.router');

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

  return app;
};

module.exports = { createApp };
