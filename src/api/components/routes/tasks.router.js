const { Router } = require('express');

const Controller = require('./');

const router = Router();

router.get('/', async (_, res) => {
  try {
    const tasks = await Controller.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
