const { notFound } = require('@hapi/boom');

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
    const user = await models.User.findByPk(id, {
      include: ['tasks'],
    });
    if (!user) throw notFound(`User ${id} not found`);
    return user;
  }

  async update(id, change) {
    const user = await this.findOne(id);
    const response = await user.update(change);
    return response;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
  }
}

module.exports = UsersService;
