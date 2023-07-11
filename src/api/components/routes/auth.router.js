const { Router } = require('express');

// VALIDATION
const validatorHandler = require('../../../middleware/validator.handler');
// SCHEMA
const authSchema = require('../schemas/auth.schema');

const {
  login,
  getUser,
  verifyToken,
} = require('../controllers/auth.controller');

const router = Router();

router.post('/login', validatorHandler(authSchema, 'body'), login);
router.get('/user', verifyToken, getUser);

module.exports = router;
