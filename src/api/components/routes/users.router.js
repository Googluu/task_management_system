const { Router } = require('express');

const { Users } = require('./');

const router = Router();

router.get('/', async (_, res) => {
  try {
    const users = await Users.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findOne(id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const body = req.body;
    const newUser = await Users.create(body);
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const updateUser = await Users.update(id, body);
    res.status(200).json(updateUser);
  } catch (error) {
    console.log(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const removeUser = await Users.remove(id);
    res.status(204).json(removeUser);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
