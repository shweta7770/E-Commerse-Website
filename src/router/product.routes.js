const express = require('express');
const productRoutes = express.Router();

const { insertProducts, getProducts, getSingleProduct, insertSingleProduct,
    deleteSingleProduct, insertProductDetial } = require('../controller/index.controller')
const { productValidation } = require("../validation/index.validation")
const auth = require('../middleware/auth');




productRoutes.post('/insertproduct', insertProducts)
productRoutes.post('/insertsingleproduct', productValidation, insertSingleProduct)
productRoutes.get('/getproducts', getProducts)
productRoutes.get('/getsingleproduct', getSingleProduct)
productRoutes.delete('/deletesingleproduct', deleteSingleProduct)
productRoutes.post('/productdetails', insertProductDetial)



productRoutes.get('/welcome', auth, (req, res) => {
    res.send('welcome')
})




module.exports = productRoutes;