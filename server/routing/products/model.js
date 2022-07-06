const mongoose = require("mongoose")
const { Schema } = mongoose

const productSchema = new Schema({
    name: String,
    price: Number,
    stock: Number,
    dateUpdated: Date,
    dateCreated: Date
});

module.exports = mongoose.model("Product", productSchema);