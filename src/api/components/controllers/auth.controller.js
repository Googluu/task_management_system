const AuthService = require('../services/auth.service');
const service = new AuthService();

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await service.login(email, password);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const verifyToken = async (req, _, next) => {
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
    const user = await service.getUser(userId);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

exports.login = login;
exports.verifyToken = verifyToken;
exports.getUser = getUser;
