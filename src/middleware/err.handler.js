const { ValidationError } = require('sequelize');
const { isBoom } = require('@hapi/boom');

function logHandler(err, _, _, next) {
  console.log(err);
  next(err);
}

function errorHandler(err, _, res, _) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHanlder(err, _, res, next) {
  if (isBoom(err)) {
    const { payload, statusCode } = err.output;
    res.status(statusCode).json(payload);
  }
  next(err);
}

function sequelizeErrorHandler(err, _, res, next) {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.message,
      errors: err.errors,
    });
  } else next(err);
}

module.exports = {
  logHandler,
  errorHandler,
  boomErrorHanlder,
  sequelizeErrorHandler,
};
