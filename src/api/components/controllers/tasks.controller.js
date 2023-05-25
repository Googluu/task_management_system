const TasksService = require('../services/tasks.service');

module.exports = function () {
  const service = new TasksService();

  function findAll() {
    return service.findAll();
  }

  function findOne(id) {
    return service.findOne(id);
  }

  function create(data) {
    return service.create(data);
  }

  return {
    findAll,
    findOne,
    create,
  };
};
