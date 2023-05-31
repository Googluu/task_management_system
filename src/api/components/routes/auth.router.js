const { Router } = require('express');

const {
  login,
  getUser,
  verifyToken,
} = require('../controllers/auth.controller');

const router = Router();

router.post('/login', login);
router.get('/user', verifyToken, getUser);

module.exports = router;
