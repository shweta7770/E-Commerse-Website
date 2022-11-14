const mongoose = require("mongoose");


let productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    stock: { type: String },
    price: { type: Number, required: true }

}, { timestamps: true })

let ProductTable = mongoose.model("ProductTable", productSchema);

module.exports = ProductTable;