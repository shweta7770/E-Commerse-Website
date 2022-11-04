const express = require('express');
const routes = express.Router();
const controller = require('../controller/index.controller')
const signUpValidation = require('../validation/signUp.validation')
const auth = require('../middleware/auth')

routes.post('/signup', signUpValidation, controller.signUp)

routes.post('/login', controller.login)

routes.get('/welcome', auth, (req, res) => {
    res.send('welcome')
})

module.exports = routes;