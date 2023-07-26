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
    const token = jwt.sign(payload, config.jwtKey, { expiresIn: '1d' });
    return {
      user,
      token,
    };
  }

  async verifyToken(headers) {
    const token = headers.split('Bearer ')[1];
    if (!token) throw notFound('Token not found');
    try {
      const decodedToken = jwt.verify(token, config.jwtKey);

      if (decodedToken.exp < Date.now() / 1000) {
        throw unauthorized('Token expired');
      }

      return decodedToken;
    } catch (error) {
      throw unauthorized('Invalid token');
    }
  }

  async getUser(userId) {
    const user = await models.User.findByPk(userId);
    if (!user) throw notFound('User not found');
    return user;
  }
}

module.exports = AuthService;
