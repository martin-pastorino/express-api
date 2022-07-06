const ProductModel = require("./model")

async function addProduct(product) {
    console.log("Producto a guardar", product)
    const p = new ProductModel(product);
   await p.save()
}




module.exports= {
    add:addProduct
}