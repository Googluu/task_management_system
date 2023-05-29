const { Router } = require('express');

const { Auth } = require('./');

const router = Router();

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Auth.login(email, password);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
