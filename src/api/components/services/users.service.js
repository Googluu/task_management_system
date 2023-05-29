const { models } = require('../../../libs/sequelize');

class UsersService {
  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async findAll() {
    const users = await models.User.findAll();
    return users;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    return user;
  }

  async update(id, change) {
    const task = await this.findOne(id);
    const response = await task.update(change);
    return response;
  }

  async delete(id) {
    const task = await this.findOne(id);
    await task.destroy();
  }
}

module.exports = UsersService;
