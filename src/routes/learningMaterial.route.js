const router = require('express').Router();

const verify = require('../middlewares/verify');
const learningMaterialSchema = require('../schemas/learningMaterial.schema.js');
const validate = require('../middlewares/validateSchema');
const learningMaterialController = require('../controllers/learningMaterial.controller.js');

/** Get */
router.get('/', verify, learningMaterialController.getAll);

router.get('/:id', verify, learningMaterialController.getById);

/** Post */
router.post('/', verify, validate(learningMaterialSchema.create), learningMaterialController.create);

module.exports = router;
