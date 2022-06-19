const joi = require('joi');

const id = joi.string().uuid();
const name = joi.string().min(3).max(30);
const price = joi.number().min(0);
const details = joi.string().min(3).max(300);

const createProductSchema = joi.object({
    name: name.required(),
    price: price.required(),
    details: details.required()
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