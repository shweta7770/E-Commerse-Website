const express = require('express')
const app = express();
let dotenv = require('dotenv');
dotenv.config();
const userRoutes = require('./src/router/user.routes')
const productRoutes = require('./src/router/product.routes.js')
const orderRoute = require('./src/router/order.routes')
const bodyparser = require('body-parser');
require('./src/db/conn')
const cors = require('cors');


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(cors({
    origin: 'http://localhost:3000/',
}))


//test
app.use('/user', userRoutes)
app.use('/product', productRoutes)
app.use('/order', orderRoute)






app.listen(process.env.PORT, '127.0.0.1', () => {
    console.log(`server is created http://127.0.0.1:${process.env.PORT}`)
})