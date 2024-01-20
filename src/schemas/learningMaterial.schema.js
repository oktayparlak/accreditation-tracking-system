const Joi = require('joi');

const create = Joi.object({
  learningMaterials: Joi.array()
    .items(
      Joi.object({
        number: Joi.number().required(),
        content: Joi.string().required(),
        contributionLevel: Joi.string().valid('1', '2', '3', '4', '5').required(),
      })
    )
    .required(),
});

module.exports = { create };
