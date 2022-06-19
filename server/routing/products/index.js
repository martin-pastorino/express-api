const express = require('express');
const { PathNames } = require('../routesNames');
const ProductService = require('../../services/products.service');
const boom = require('@hapi/boom');
const { validatorHandler } = require('../../middlewares/validatorHandler');
const { createProductSchema } = require('../../validations/product.validation');
const service = new ProductService();
const router = express.Router();


/****************** GETS ************************/
router.get(PathNames.PRODUCTS, async (req, res) => {
  res.status(200).json(await service.find());
});

router.get(PathNames.PRODUCTS_ID, async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id)
    if (product) {
      res.status(200).json(product);
      return
    }
    throw boom.notFound("Product not found");
  } catch (error) {
    next(error)
  }
});

router.get(PathNames.PRODUCTS_DETAILS, async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id)
    if (product) {
      res.status(200).json({ id: product.id, details: product.details });
      return
    }
    throw boom.notFound("Details of product has not been found")
  } catch (error) {
    next(error)
  }
});

/****************** POST ************/
router.post(PathNames.PRODUCTS, 
  validatorHandler(createProductSchema,'body')
  ,async (req, res, next) => {
    try {
      console.log("entro al post");
      const body = req.body;
      if (!body.name || !body.price || !body.details) {
        throw boom.badData("The entity could not be created");
      }
      const product = await service.findByName(body.name);
      if (product) {
        throw boom.conflict("The product with the name already exists");
      }
      res.status(201).json(await service.create(body));
    } catch (error) {
      next(error)
    }
  });


/****************** ALL ************/
router.all(PathNames.ALL, (req, res, next) => {
  next(boom.methodNotAllowed("method invoked not allowed"));
})

module.exports = router;
