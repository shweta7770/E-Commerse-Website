const Joi = require("joi")

const userValidation = (req, res, next) => {
    const Schema = Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        mobNumber: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
        // isAdmin: Joi.boolean()
    })

    const result = Schema.validate(req.body);
    if (result.error) {
        return res.json({ msg: result.error.message })
    }
    next()
}

module.exports = userValidation;