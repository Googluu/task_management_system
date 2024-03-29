const { Router } = require('express');

const validatorHandler = require('../../../middleware/validator.handler');
const verifyToken = require('../../../middleware/auth.handler');
const {
  createTask,
  findTaskById,
  updateTask,
} = require('../schemas/task.schema');
const { Tasks } = require('./');

const router = Router();

router.get('/', verifyToken, async (_, res, next) => {
  try {
    const tasks = await Tasks.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(findTaskById, 'params'),
  verifyToken,
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const task = await Tasks.findOne(id);
      res.status(200).json(task);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createTask, 'body'),
  verifyToken,
  async (req, res, next) => {
    try {
      const body = req.body;
      const data = await Tasks.create(body);
      res.status(201).json({
        status: '201 Created',
        data,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  '/:id',
  validatorHandler(findTaskById, 'params'),
  validatorHandler(updateTask, 'body'),
  verifyToken,
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updateTask = await Tasks.update(id, body);
      res.status(200).json(updateTask);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(findTaskById, 'params'),
  verifyToken,
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const removeTask = await Tasks.remove(id);
      res.status(204).json(removeTask);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
