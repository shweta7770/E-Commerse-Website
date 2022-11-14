const ProductTable = require('../model/product.model')
const products = require("../data/product.json")


const insertSingleProduct = async (req, res) => {
    try {
        const Product = req.body;
        await ProductTable.create(Product)
        return res.status(200).send({ msg: "Product is inserted" })
    }
    catch (err) {
        return res.status(500).json({ msg: "Something went wromg" })
    }
}

module.exports = insertSingleProduct;