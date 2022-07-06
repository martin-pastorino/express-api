const ProductModel = require("./model")

async function addProduct(product) {
    const p = new ProductModel(product);
   await p.save()
}

async function allProducts(){
const result = await ProductModel.find()
return result
}




module.exports= {
    add:addProduct,
    all: allProducts
}