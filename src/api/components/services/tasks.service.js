const { faker } = require('@faker-js/faker');

const { generateTasks } = require('../../../db/mocks/task.mock');

class TasksService {
  constructor() {
    this.tasks = [];
    this.generate();
  }

  generate() {
    let limit = 10;
    for (let i = 0; i < limit; i++) {
      this.tasks.push(generateTasks());
    }
  }

  async create(data) {
    const newTask = await {
      ...data,
      id: faker.datatype.uuid(),
    };
    this.tasks.push(newTask);
    return newTask;
  }

  async findAll() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.tasks);
      }, 3000);
    });
  }

  async findOne(id) {
    return this.tasks.find((item) => item.id === id);
  }
}

module.exports = TasksService;
