const { notFound } = require('@hapi/boom');

const { models } = require('../../../libs/sequelize');

class TasksService {
  async create(data) {
    const newTask = await models.Task.create(data);
    return newTask;
  }

  async findAll() {
    const tasks = await models.Task.findAll();
    return tasks;
  }

  async findOne(id) {
    const task = await models.Task.findByPk(id);
    if (!task) throw notFound(`Task ${id} not found`);
    return task;
  }

  async update(id, change) {
    const task = await this.findOne(id);
    const response = await task.update(change);
    return response;
  }

  async delete(id) {
    const task = await this.findOne(id);
    await task.destroy();
  }
}

module.exports = TasksService;
