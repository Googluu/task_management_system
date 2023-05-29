const jwt = require('jsonwebtoken');

const { config } = require('../config/config');

function verificarToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res
      .status(401)
      .json({ mensaje: 'Acceso no autorizado. Token no proporcionado.' });
  }
  try {
    const decoded = jwt.verify(token, config.jwtKey);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ mensaje: 'Acceso no autorizado. Token inválido.' });
  }
}

module.exports = verificarToken;
