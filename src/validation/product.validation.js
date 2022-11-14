const Joi = require("joi")

const productValidation = (req, res, next) => {
    const Schema = Joi.object().keys({
        title: Joi.string().required(),
        desc: Joi.string().required(),
        img: Joi.string().required(),
        category: Joi.string().required(),
        stock: Joi.string().required(),
        price: Joi.number().required()
    })
    const result = Schema.validate(req.body);
    if (result.error) {
        return res.json({ msg: result.error.message })
    }
    next()
}

module.exports = productValidation