const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { unauthorized, notFound } = require('@hapi/boom');

const { models } = require('../../../libs/sequelize');
const { config } = require('../../../config/config');

class AuthService {
  async login(email, password) {
    const user = await models.User.findOne({ where: { email } });
    if (!user) throw unauthorized();
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) throw unauthorized();
    const token = jwt.sign(user.id, config.jwtKey);
    return {
      token,
      user,
    };
  }
}

module.exports = AuthService;
