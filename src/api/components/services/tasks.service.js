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
    const newTask = {
      ...data,
      id: faker.string.uuid(),
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

  async update(id, change) {
    const index = this.tasks.findIndex((item) => item.id === id);
    if (index === -1) throw new Error('Task not found');
    const task = this.tasks[index];
    this.tasks[index] = {
      ...task,
      ...change,
    };
    return this.tasks[index];
  }

  async delete(id) {
    const index = this.tasks.findIndex((item) => item.id === id);
    if (index === -1) throw new Error('Task not found');
    return this.tasks.splice(index, 1);
  }
}

module.exports = TasksService;
