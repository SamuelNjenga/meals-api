const bcrypt = require('bcrypt');

exports.hashPassword= async (password) => {
    return  bcrypt.hash(password, 10);
 }


module.exports = async function validatePassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword);
}
