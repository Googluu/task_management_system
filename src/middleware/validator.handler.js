const { badRequest } = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (req, _, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(badRequest(error));
    } else next();
  };
}

module.exports = validatorHandler;
