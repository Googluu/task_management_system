const { Task, TaskSchema } = require('./task.model');

function setupModels(sequelize) {
  Task.init(TaskSchema, Task.config(sequelize));
}

module.exports = setupModels;
