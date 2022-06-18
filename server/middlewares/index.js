const express = require('express');
const {logError,boomErrorHandler} = require('./errorHandler');

function registerMiddlewares(app) {

  app.use(express.json());
  app.use(boomErrorHandler);
  app.use(logError);
}

module.exports = { registerMiddlewares };
