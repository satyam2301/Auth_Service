const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  SALT_ROUNDS: process.env.SALT_ROUNDS,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRY: process.env.JWT_EXPIRY,
  FLIGHT_SERVICE_HOST: process.env.FLIGHT_SERVICE_HOST,
  BOOKING_SERVICE_HOST: process.env.BOOKING_SERVICE_HOST,
};
