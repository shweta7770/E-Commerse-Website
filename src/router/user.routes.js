const express = require('express')
const userRoutes = express.Router();
const { signUp, login } = require('../controller/index.controller')
const { userValidation } = require("../validation/index.validation")



userRoutes.post('/signup', userValidation, signUp)
userRoutes.post('/login', login)



module.exports = userRoutes;