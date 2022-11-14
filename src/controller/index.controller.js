const signUp = require('./signUp.controller')
const login = require('./login.controller')
const insertProducts = require('./insertProduct.controller')
const getProducts = require('./getProducts.controller')
const getSingleProduct = require('./getSingleProduct.controller')
const insertSingleProduct = require("./insertSingleProduct.controller")
const deleteSingleProduct = require("./deleteProduct.controller")

module.exports = {
    signUp,
    login,
    insertProducts,
    getProducts,
    getSingleProduct,
    insertSingleProduct,
    deleteSingleProduct
}