const faker = require("faker")

class ProductService {
  constructor() {
    this.products = []
    this.generateData()
  }

  generateData() {
    for (let index = 0; index < 100; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        details: faker.commerce.productDescription()
      })
    }

  }

  async find(){
    const result = new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(this.products)
      },0)
    })
    return result
  }

  async findOne(id){
    return this.products.find(product => product.id === id)
  }

  async findByName(name){
    return this.products.find(product => product.name === name)
  }

  async  create(product){
    product.id = faker.datatype.uuid()
    this.products.push(product)
    return product
  }

}

module.exports = ProductService
