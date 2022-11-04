const bcrypt = require("bcryptjs");


const passwordHash = (password) => {

    return bcrypt.hashSync(password, 10);

}
const checkPassword = (password, user) => {
    return bcrypt.compareSync(password, user)
}



module.exports = {
    passwordHash,
    checkPassword
}
