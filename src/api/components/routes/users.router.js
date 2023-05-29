const { Router } = require('express');

const { Users } = require('./');

const router = Router();

router.get('/', async (_, res, next) => {
  try {
    const users = await Users.findAll();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await Users.findOne(id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const newUser = await Users.create(body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const updateUser = await Users.update(id, body);
    res.status(200).json(updateUser);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const removeUser = await Users.remove(id);
    res.status(204).json(removeUser);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
