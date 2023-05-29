const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(25);
const email = Joi.string().email();
const password = Joi.string().min(8);

const createUser = Joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required(),
});

const updateUser = Joi.object({
  name: name,
  email: email,
  password: password,
});

const findUserById = Joi.object({
  id: id.required(),
});

module.exports = {
  createUser,
  updateUser,
  findUserById,
};
