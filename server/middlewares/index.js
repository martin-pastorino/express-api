
const {logError,boomErrorHandler} = require('./errorHandler');

function registerMiddlewares(app) {
  app.use(boomErrorHandler);
  app.use(logError);
}

module.exports = { registerMiddlewares };
