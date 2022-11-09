const ProductTable = require('../model/product.model')


const getProducts = async (req, res) => {
    try {
        const category = req.query.category;
        const minPrice = req.query.minprice;
        const maxPrice = req.query.maxprice;
        const { page = 1, limit = 5 } = req.query;
        //let page = req.query.page;
        //let limit = req.query.limit;

        if (!category && !minPrice && !maxPrice) {
            let allProducts = await ProductTable.find()
            return res.json({ Products: allProducts })
        }
        const dbQueryParance = []
        if (minPrice && maxPrice)
            dbQueryParance.push({ price: { $gt: minPrice, $lt: maxPrice } })
        if (category)
            dbQueryParance.push({ category: category })
        //console.log("hi")
        let allProducts = await ProductTable.find({
            $or: dbQueryParance
        }).limit(limit).skip((page - 1) * limit);

        let count = allProducts.length + 1;

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