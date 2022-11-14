const ProductTable = require('../model/product.model')

const deleteSingleProduct = async (req, res) => {
    try {
        const { id } = req.query;
        if (!id) {
            return res.status(400).json({ msg: "Please send product-id for delete product" })
        }
        else {
            if (!id.match(/^[0-9a-fA-F]{24}$/)) {
                return res.status(400).json({ msg: "incorrect Product Id " })
            }

            const searchProduct = await ProductTable.findOne({ _id: id })
            if (!searchProduct) {
                return res.status(400).json({ msg: "Product does not exist" })
            }
            const getProducts = await ProductTable.findByIdAndDelete(id).exec()
            return res.status(200).json({ msg: `deleted record` })
        }
    }
    catch (err) {
        return res.status(500).json(err.message);
    }

}

module.exports = deleteSingleProduct;