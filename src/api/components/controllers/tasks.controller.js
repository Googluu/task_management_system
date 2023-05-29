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

  function update(id, change) {
    return service.update(id, change);
  }

  function remove(id) {
    return service.delete(id);
  }

  return {
    findAll,
    findOne,
    create,
    update,
    remove,
  };
};
