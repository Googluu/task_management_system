const { Router } = require('express');

const { Tasks } = require('./');

const router = Router();

router.get('/', async (_, res, next) => {
  try {
    const tasks = await Tasks.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Tasks.findOne(id);
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const newTask = await Tasks.create(body);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const updateTask = await Tasks.update(id, body);
    res.status(200).json(updateTask);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const removeTask = await Tasks.remove(id);
    res.status(204).json(removeTask);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
