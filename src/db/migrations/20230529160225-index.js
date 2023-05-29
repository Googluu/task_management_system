'use strict';

const { USER_TABLE, UserSchema } = require('../models/user.model');
const { TASK_TABLE, TaskSchema } = require('../models/task.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(TASK_TABLE, TaskSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(TASK_TABLE);
  },
};
