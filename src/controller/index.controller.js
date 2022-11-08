const signUp = require('./signUp.controller')
const login = require('./login.controller')
const insertProducts = require('./insertProduct.controller')
const getProducts = require('./getProducts.controller')
const getSingleProduct = require('./getSingleProduct.controller')
module.exports = {
    signUp,
    login,
    insertProducts,
    getProducts,
    getSingleProduct
}