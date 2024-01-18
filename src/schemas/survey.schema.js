const Joi = require('joi');

const create = Joi.object({
  question1: Joi.number(),
  question2: Joi.number(),
  question3: Joi.number(),
  question4: Joi.number(),
  question5: Joi.number(),
});

module.exports = { create };
