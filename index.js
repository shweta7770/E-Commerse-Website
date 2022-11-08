const express = require('express')
const app = express();
let dotenv = require('dotenv');
dotenv.config();

const routes = require('./src/router/routes.js')
const bodyparser = require('body-parser');
require('./src/db/conn')
const cors = require('cors')

app.use(bodyparser.json())
app.use(cors({
    origin: 'http://localhost:3000/',
}))
app.use('/', routes)






app.listen(process.env.PORT, '127.0.0.1', () => {
    console.log(`server is created http://127.0.0.1:${process.env.PORT}`)
})