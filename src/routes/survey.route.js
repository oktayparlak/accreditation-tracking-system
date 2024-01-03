const router = require('express').Router();

const verify = require('../middlewares/verify');
const surveySchema = require('../schemas/survey.schema');
const validate = require('../middlewares/validateSchema');
const surveyController = require('../controllers/survey.controller');

/** Get */
router.get('/', verify, surveyController.getAll);

router.get('/:id', verify, surveyController.getById);

/** Post */
router.post('/', verify, validate(surveySchema.create), surveyController.create);
