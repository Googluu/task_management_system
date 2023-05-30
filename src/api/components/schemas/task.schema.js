const Joi = require('joi');

const id = Joi.number().integer();
const title = Joi.string().min(3).max(25);
const description = Joi.string().min(10);
const userId = Joi.number().integer();

const createTask = Joi.object({
  title: title.required(),
  description: description.required(),
  userId: userId.required(),
});

const updateTask = Joi.object({
  title: title,
  description: description,
  userId: userId,
});

const findTaskById = Joi.object({
  id: id.required(),
});

module.exports = {
  createTask,
  updateTask,
  findTaskById,
};
