const Joi = require('joi');

// Esquema de validación para la autenticación del usuario
const authSchema = Joi.object({
  email: Joi.string().email().required().label('Correo electrónico'),
  password: Joi.string().required().label('Contraseña'),
});

module.exports = authSchema;
