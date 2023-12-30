const Joi = require('joi');

const login = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  type: Joi.string().valid('ADMIN', 'USER').required(),
});

const create = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  type: Joi.string().valid('ADMIN', 'USER').required(),
});

module.exports = { login, create };
