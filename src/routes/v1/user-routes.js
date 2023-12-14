const express = require('express');
const { UserController } = require('../../controllers');
const { AuthRequestMiddlewares } = require('../../middlewares');
const router = express.Router();

// createUser -> signup
router
  .route('/signup')
  .post(AuthRequestMiddlewares.validateAuthRequest, UserController.createUser);
// loginUser ->  signIn
router.post(
  '/signin',
  AuthRequestMiddlewares.validateAuthRequest,
  UserController.signin
);

module.exports = router;
