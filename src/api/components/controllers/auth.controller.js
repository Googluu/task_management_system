const AuthService = require('../services/auth.service');

module.exports = function () {
  const service = new AuthService();

  function login(email, password) {
    return service.login(email, password);
  }

  return {
    login,
  };
};
