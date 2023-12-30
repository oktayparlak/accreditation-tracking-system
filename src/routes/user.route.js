const router = require('express').Router();

const verify = require('../middlewares/verify');
const userSchema = require('../schemas/user.schema');
const validate = require('../middlewares/validateSchema');
const userController = require('../controllers/user.controller');

/** Post */
router.post('/', verify, validate(userSchema.create), userController.create);

module.exports = router;
