const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("server is connected sucessfully....")
}).catch((err) => {
    console.log(err)
})