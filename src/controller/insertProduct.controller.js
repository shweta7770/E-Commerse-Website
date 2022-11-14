const ProductTable = require('../model/product.model')
const products = require("../data/product.json")

const insertProducts = async (req, res) => {
    try {

        await ProductTable.deleteMany();
        //console.log('Products are deleted')

        await ProductTable.insertMany(products)
        return res.status(200).send({ msg: "Products are inserted" })
        console.log('All products are added')
    } catch (err) {
        console.log(err.message)

    }
}


module.exports = insertProducts;