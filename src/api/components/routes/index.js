const TasksService = require('../services/tasks.service');
const TasksController = require('../controllers/tasks.controller');
const Tasks = TasksController(TasksService);

const UsersService = require('../services/users.service');
const UsersController = require('../controllers/users.controller');
const Users = UsersController(UsersService);

module.exports = { Tasks, Users };
