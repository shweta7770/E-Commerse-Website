const express = require('express');
const routes = express.Router();
const controller = require('../controller/index.controller')
const { userValidation, productValidation } = require("../validation/index.validation")
const auth = require('../middleware/auth');



routes.post('/signup', userValidation, controller.signUp)
routes.post('/login', controller.login)

routes.post('/insertproduct', controller.insertProducts)
routes.post('/insertsingleproduct', productValidation, controller.insertSingleProduct)

routes.get('/getproducts', controller.getProducts)
routes.get('/getsingleproduct', controller.getSingleProduct)
routes.delete('/deletesingleproduct', controller.deleteSingleProduct)
routes.get('/welcome', auth, (req, res) => {
    res.send('welcome')
})


module.exports = routes;