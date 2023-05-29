const { Task, TaskSchema } = require('./task.model');
const { User, UserSchema } = require('./user.model');

function setupModels(sequelize) {
  Task.init(TaskSchema, Task.config(sequelize));
  User.init(UserSchema, User.config(sequelize));

  User.associate(sequelize.models);
  Task.associate(sequelize.models);
}

module.exports = setupModels;
