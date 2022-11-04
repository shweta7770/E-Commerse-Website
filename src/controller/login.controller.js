const mongoose = require("mongoose")
const SignUpTable = require("../model/model")
const pass = require("../utils/password")
const jwt = require("jsonwebtoken")

const login = async (req, res) => {
    try {
        let user = await SignUpTable.findOne({ email: req.body.email });

        if (user) {
            const result = await pass.checkPassword(req.body.password, user.password)
            if (result) {
                const token = jwt.sign({ user: user }, process.env.jwtSecretKey)
                return res.status(200).json({ user, token })
            }
            else {
                return res.status(400).json("Data is incorrect.....")
            }
        }
        else {
            return res.status(400).json({ msg: "Please insert data" })
        }
    }
    catch (error) {
        return res.json({ msg: "something goes incorrect" })
    }
}


module.exports = login