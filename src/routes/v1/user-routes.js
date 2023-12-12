const express = require('express');
const { UserController } = require('../../controllers');
const router = express.Router();

router.route('/').post(UserController.createUser);
module.exports = router;
