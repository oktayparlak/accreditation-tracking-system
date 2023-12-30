const router = require('express').Router();

const verify = require('../middlewares/verify');
const courseSchema = require('../schemas/course.schema');
const validate = require('../middlewares/validateSchema');
const courseController = require('../controllers/course.controller');

/** Get */
router.get('/', verify, courseController.getAll);

/** Post */
router.post('/', verify, validate(courseSchema.create), courseController.create);

module.exports = router;
