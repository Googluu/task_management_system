const TasksService = require('../services/tasks.service');
const TasksController = require('../controllers/tasks.controller');

module.exports = TasksController(TasksService);
