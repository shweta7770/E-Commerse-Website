const ProductDetailsTable = require("../model/productDetails.model")


const insertProductDetial = async (req, res) => {
    try {
        const user = await ProductDetailsTable.create(req.body)
        //console.log(user)
        return res.status(200).json({ msg: "product deetails inserted sucessfully" })
    }
    catch (err) {
        return res.status(500).json({ err })
        console.log(err)
    }
}


module.exports = insertProductDetial;