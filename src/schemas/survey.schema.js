const Joi = require('joi');

const create = Joi.object({
  applicationId: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
});

module.exports = { create };
