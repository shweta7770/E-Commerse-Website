const pass = require("../utils/password")
const SignUpTable = require("../model/model")



let signUp = async (req, res) => {
    try {
        let user = await SignUpTable.find({ email: req.body.email });

        if (!user || user?.length !== 0) {
            return res.status(400).json({ msg: "That user already exists.." })
        }
        else {
            let hash = await pass.passwordHash(req.body.password)
            user = {
                ...req.body,
                password: hash
            }
            await SignUpTable.create(user);
            return res.json({ msg: "Data inserted sucessfully" })
        }
    }
    catch {
        return res.json({ msg: "something went wrong..." })
    }

}


module.exports = signUp;