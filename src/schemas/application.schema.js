const Joi = require('joi');

const create = Joi.object({
  data: {
    courseId: Joi.string().required(),
    measuringTools: Joi.array().items({
      name: Joi.string().required(),
      impactRate: Joi.number().required(),
      questions: Joi.array()
        .items(
          Joi.object({
            number: Joi.number().required(),
            avarage: Joi.number().required(),
            relevantNumberIds: Joi.array().items(Joi.string()).required(),
            fullPoints: Joi.number().required(),
          })
        )
        .required(),
    }),
  },
});

const update = Joi.object({
  data: {
    courseId: Joi.string().required(),
    measuringTools: Joi.array().items({
      name: Joi.string().required(),
      impactRate: Joi.number().required(),
      questions: Joi.array()
        .items(
          Joi.object({
            number: Joi.number().required(),
            avarage: Joi.number().required(),
            relevantNumberIds: Joi.array().items(Joi.string()).required(),
            fullPoints: Joi.number().required(),
          })
        )
        .required(),
    }),
  },
});

module.exports = { create, update };

/**
 * "measuringTools": [
        {
            "name":"Tool 1",
            "impactRate":5,
            "questions": [
                {
                    "number":1,
                    "avarage":4.5,
                    "fullPoints":10,
                    "relevantNumberIds": ["","",""] // Her soru için en fazla 3 tane LearninMaterial Id'si tutulabilir.
                },
                {
                    "number": 2,
                    "avarage": 3.2,
                    "fullPoints": 8,
                    "relevantNumberIds": ["","",""]
                }
            ]
        },
        {
            "name": "Tool 2",
            "impactRate": 4,
            "questions":[
                {
                    "number": 3,
                    "avarage": 2.8,
                    "fullPoints": 7,
                    "relevantNumberIds": ["","",""]
                },
                {
                    "number": 4,
                    "avarage": 4.0,
                    "fullPoints": 9,
                    "relevantNumberIds": ["","",""]
                }
            ]
        }
    ]
 */
