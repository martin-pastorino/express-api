const ProductService = require('../../services/products.service');
const service = new ProductService();
const store = require("./store")
const boom = require('@hapi/boom');

async function getAllProducts(req,res){
  const result =await store.all()
    res.status(200).json(result);
}

async function getProductById(req,res,next){
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
}

async function getProductDetails(req,res,next){
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
}

async function createProduct(req,res,next){
    try {
        // console.log("entro al post");
        // const body = req.body;
        // if (!body.name || !body.price || !body.details) {
        //   throw boom.badData("The entity could not be created");
        // }
        // const product = await service.findByName(body.name);
        // if (product) {
        //   throw boom.conflict("The product with the name already exists");
        // }
        // res.status(201).json(await service.create(body));
        const body = req.body
        
        res.status(201).json(await store.add(body));
      } catch (error) {
        next(error)
      }
}

function allProducts(res,req,next){
    next(boom.methodNotAllowed("method invoked not allowed"));
}

module.exports ={
    getAllProducts,getProductById, getProductDetails, createProduct, allProducts
}