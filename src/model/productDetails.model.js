const mongoose = require('mongoose');
const ProductTable = require("../model/product.model")
const SignUpTable = require("./model")
const productDetailsSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: ProductTable,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    productDetails: {
        type: Array
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'SignUpTable',
                required: true
            },

            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ]
})


const ProductDetailsTable = mongoose.model("ProductDetailsTable", productDetailsSchema)

module.exports = ProductDetailsTable