const { faker } = require('@faker-js/faker');

const { generateUsers } = require('../../../db/mocks/user.mock');

class UsersService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    let limit = 10;
    for (let i = 0; i < limit; i++) {
      this.users.push(generateUsers());
    }
  }

  async create(data) {
    const newUser = {
      ...data,
      id: faker.string.uuid(),
    };
    this.users.push(newUser);
    return newUser;
  }

  async findAll() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.users);
      }, 3000);
    });
  }

  async findOne(id) {
    return this.users.find((item) => item.id === id);
  }

  async update(id, change) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) throw new Error('Task not found');
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...change,
    };
    return this.users[index];
  }

  async delete(id) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) throw new Error('Task not found');
    return this.users.splice(index, 1);
  }
}

module.exports = UsersService;
