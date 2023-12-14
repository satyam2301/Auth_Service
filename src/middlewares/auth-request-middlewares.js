const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateAuthRequest(req, res, next) {
  if (!req.body.email) {
    ErrorResponse.message = 'Something went wrong while authenticating user';
    ErrorResponse.error = new AppError(
      [
        'Email not found in the incoming request with correct naming parameter!',
      ],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.password) {
    ErrorResponse.message = 'Something went wrong while authenticating user';
    ErrorResponse.error = new AppError(
      [
        'Password not found in the incoming request with correct naming parameter!',
      ],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  //   if name is in correct form then
  next();
}

module.exports = { validateAuthRequest };
