const { getAllProducts,
  getProductById,
  getProductDetails,
  createProduct,
  allProducts } = require('./handlers');

const express = require('express');
const router = express.Router();
const { PathNames } = require('../routesNames');

const { validatorHandler } = require('../../middlewares/validatorHandler');
const { createProductSchema } = require('../../validations/product.validation');


/****************** GETS ************************/
router.get(PathNames.PRODUCTS, getAllProducts);

router.get(PathNames.PRODUCTS_ID, getProductById);

router.get(PathNames.PRODUCTS_DETAILS, getProductDetails);

/****************** POST ************/
// router.post(PathNames.PRODUCTS,
//   validatorHandler(createProductSchema, 'body')
//   , createProduct);
router.post(PathNames.PRODUCTS, createProduct);

/****************** ALL ************/
router.all(PathNames.ALL, allProducts);

module.exports = router;
