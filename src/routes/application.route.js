const router = require('express').Router();

const upload = require('../configs/file');
const verify = require('../middlewares/verify');
const applicationSchema = require('../schemas/application.schema');
const validate = require('../middlewares/validateSchema');
const applicationController = require('../controllers/application.controller');

/** Get */
router.get('/download/:id', verify, applicationController.download);

router.get('/:id', verify, applicationController.getById);

router.get('/', verify, applicationController.getAll);

/** Post */
router.post('/', verify, validate(applicationSchema.create), upload.array('files', 4), applicationController.create);

/** Patch */
router.patch('/:id', verify, validate(applicationSchema.update), applicationController.update);

module.exports = router;
