const AuthService = require('../services/auth.service');

module.exports = function () {
  const service = new AuthService();

  function login(email, password) {
    return service.login(email, password);
  }

  const verifyToken = async (req, res, next) => {
    try {
      const headers = req.headers['authorization'];
      const user = await service.verifyToken(headers);
      req.sub = user.sub;
    } catch (error) {
      next(error);
    }
    next();
  };

  const getUser = async (req, res, next) => {
    try {
      const userId = req.sub;
      console.log(userId);
      const user2 = await service.getUser(userId);
      res.status(200).json(user2);
    } catch (error) {
      next(error);
    }
  };

  return {
    login,
    verifyToken,
    getUser,
  };
};
