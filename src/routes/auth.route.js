const router = require('express').Router();

const userSchema = require('../schemas/user.schema');
const validate = require('../middlewares/validateSchema');
const authController = require('../controllers/auth.controller');

/** Post */
router.post('/login', validate(userSchema.login), authController.login);

module.exports = router;
