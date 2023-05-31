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
    const payload = {
      sub: user.id,
    };
    const token = jwt.sign(payload, config.jwtKey);
    return {
      token,
      user,
    };
  }

  async verifyToken(headers) {
    const token = headers.split(' ')[1];
    if (!token) throw notFound('Token not found');
    const user = jwt.verify(token, config.jwtKey, { expiresIn: '1hr' });
    if (!user) throw unauthorized();
    return user;
  }

  async getUser(userId) {
    const user = await models.User.findByPk(userId);
    if (!user) throw notFound('User not found');
    return user;
  }
}

module.exports = AuthService;
