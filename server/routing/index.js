const express = require('express');
const homeRoute = require('./home/');
const productsRoute = require('./products/');
const { APISPaths, PathNames } = require('./routesNames');


function registerRoutes(app) {
  const routerV1 = express.Router();
  
  app.use(APISPaths.V1, routerV1);
  routerV1.use(PathNames.PRODUCTS_PATH, productsRoute);
  routerV1.use(PathNames.HOME_PATH, homeRoute);

}

module.exports = registerRoutes;
