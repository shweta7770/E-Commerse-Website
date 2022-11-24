const signUp = require('./signUp.controller')
const login = require('./login.controller')
const insertProducts = require('./insertProduct.controller')
const getProducts = require('./getProducts.controller')
const getSingleProduct = require('./getSingleProduct.controller')
const insertSingleProduct = require("./insertSingleProduct.controller")
const deleteSingleProduct = require("./deleteProduct.controller")
const orderSetInCard = require('../controller/placeOrder.controller')
const getOrderSet = require("../controller/getOrderSet.controller")
const insertProductDetial = require("../controller/productDetails.controller")

module.exports = {
    signUp,
    login,
    insertProducts,
    getProducts,
    getSingleProduct,
    insertSingleProduct,
    deleteSingleProduct,
    orderSetInCard,
    getOrderSet,
    insertProductDetial
}