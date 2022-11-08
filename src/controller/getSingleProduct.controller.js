const ProductTable = require('../model/product.model')
const getSingleProduct = async (req, res) => {
    try {
        const id = req.query.id;
        if (id) {
            const getProduct = await ProductTable.findById(id);
            return res.status(200).json({ Product: getProduct })
        }
        else {
            return res.status(400).json({ msg: "Please provide ProductId" })
        }
    }
    catch (error) {
        return res.status(500).json({ msg: "Something went wrong" })
    }

}


module.exports = getSingleProduct;