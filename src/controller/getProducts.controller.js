const ProductTable = require('../model/product.model')


const getProducts = async (req, res) => {
    try {

        const { page = 1, limit = 5, category, minPrice, maxPrice } = req.query;

        if (!category && !minPrice && !maxPrice) {
            let allProducts = await ProductTable.find()
            return res.json({ Products: allProducts })
        }
        const dbQueryParance = []
        if (minPrice && maxPrice)
            dbQueryParance.push({ price: { $gt: minPrice, $lt: maxPrice } })
        if (category)
            dbQueryParance.push({ category: category })

        let allProducts = await ProductTable.find({
            $or: dbQueryParance
        })

        let count = allProducts.length;

        allProducts = await ProductTable.find({
            $or: dbQueryParance
        }).limit(limit).skip((page - 1) * limit);

        console.log(count)
        return res.json({
            Products: allProducts,
            TotalPage: Math.ceil(count / limit),
            CurrnetPage: page
        })

    }
    catch (error) {
        res.status(500).send("Something went wrong")
    }
}


module.exports = getProducts;