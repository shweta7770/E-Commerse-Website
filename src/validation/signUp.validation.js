const Joi = require("joi")

const signUpValidation = (req, res, next) => {
    const Schema = Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email(),
        password: Joi.string().required(),
        mobNumber: Joi.string().length(10).pattern(/^[0-9]+$/),
        // isAdmin: Joi.boolean()
    })

    const result = Schema.validate(req.body);
    if (result.error) {
        return res.json({ msg: result.error.message })
    }
    next()
}

module.exports = signUpValidation;