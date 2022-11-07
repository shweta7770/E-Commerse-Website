const ProductTable = require('../model/product.model')


const getProducts = async (req, res) => {
    try {
        let allProducts = await ProductTable.find()
        return res.json({ Products: allProducts })
    }
    catch (error) {
        res.send("Something went wrong")
    }
}


module.exports = getProducts;