const express = require('express');
const rateLimit = require('express-rate-limit');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { ServerConfig } = require('./config');

const app = express();
const apiRoutes = require('./routes');

const limiter = rateLimit({
  windowMs: 2 * 60 * 1000, //2 minutes time frame
  max: 4, // max how many request can be send in 2 min time frame
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(limiter);

app.use(
  '/flightsService',
  createProxyMiddleware({
    target: ServerConfig.FLIGHT_SERVICE_HOST,
    changeOrigin: true,
    pathRewrite: { '^/flightsService': '/' },
  })
);

app.use(
  '/bookingService',
  createProxyMiddleware({
    target: ServerConfig.BOOKING_SERVICE_HOST,
    changeOrigin: true,
    pathRewrite: { '^/bookingService': '/' },
  })
);

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Site is up and running on PORT No. ${ServerConfig.PORT}`);
  // LoggerConfig.info('Successfully started server', {});
});
