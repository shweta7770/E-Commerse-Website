const ProductTable = require('../model/product.model')
const getSingleProduct = async (req, res) => {
    try {
        const id = req.query.id;
        if (id) {

            if (!id.match(/^[0-9a-fA-F]{24}$/)) {
                return res.status(400).json({ msg: "incorrect Product Id " })
            }

            let existId = await ProductTable.findOne({ _id: id })
            if (!existId) {
                return res.status(400).json({ msg: "Product does not exist" })
            }

            const getProduct = await ProductTable.findById(id);
            return res.status(200).json({ Product: getProduct })
        }
        else {
            return res.status(400).json({ msg: "Please provide ProductId" })
        }
    }
    catch (error) {
        console.log(error)
        return res.status(500).send({ msg: error })
    }

}


module.exports = getSingleProduct;