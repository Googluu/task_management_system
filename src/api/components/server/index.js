const { Router } = require('express');

const tasksRouter = require('../routes/tasks.router');
const usersRouter = require('../routes/users.router');
const authRouter = require('../routes/auth.router');

function routerApi(app) {
  const router = Router();
  app.use('/api/v1', router);
  router.use('/tasks', tasksRouter);
  router.use('/users', usersRouter);
  router.use('/auth', authRouter);
}

module.exports = routerApi;
