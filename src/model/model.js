const mongoose = require("mongoose");


let userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    mobNumber: {
        type: Number
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }


}, { timestamps: true })

let SignUpTable = mongoose.model("SignUpTable", userSchema);

module.exports = SignUpTable;