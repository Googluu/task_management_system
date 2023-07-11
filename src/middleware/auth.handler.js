const jwt = require('jsonwebtoken');
const { unauthorized } = require('@hapi/boom');

const { config } = require('../config/config');

const verifyToken = (req, _, next) => {
  const token = req.headers.authorization;
  if (!token) throw unauthorized();
  try {
    const decodedToken = jwt.verify(token, config.jwtKey);
    req.sub = decodedToken.sub;
    next();
  } catch (error) {
    next(unauthorized(error));
  }
};

module.exports = verifyToken;
