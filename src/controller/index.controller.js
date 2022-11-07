const signUp = require('./signUp.controller')
const login = require('./login.controller')
const insertProducts = require('./insertProduct.controller')
const getProducts = require('./getProducts.controller')

module.exports = {
    signUp,
    login,
    insertProducts,
    getProducts
}