var mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name : String,
    desc : String,
    price: Number
})

const product = mongoose.model("products", productSchema);
module.exports = product;