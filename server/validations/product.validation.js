const joi = require('joi');

const id = joi.string().uuid();
const name = joi.string().min(3).max(30);
const price = joi.number().min(0);
const stock = joi.number().min(1)
const dateUpdated = joi.date()
const dateCreated = joi.date()

const createProductSchema = joi.object({
    name: name.required(),
    price: price.required(),
    stock,
    dateUpdated,
    dateCreated
})

const upateProdcutSchema = joi.object({
    id:id.required(),
    name,
    price
})



module.exports = {
    createProductSchema,
    upateProdcutSchema
}