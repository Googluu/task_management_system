const { Router } = require('express');

const {
  Auth: { getUser, verifyToken, login },
} = require('./');

const router = Router();

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await login(email, password);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

router.get('/user', verifyToken, getUser);

module.exports = router;
