const { User } = require("../../db");
const bcrypt = require("bcryptjs");

const postUser = async({name, password, email, image}) =>{

    const passwordHash = await bcrypt.hash(password, 10);
    const userData = {
        name,
        email,
        image,
        password: passwordHash,
      };
    const data = await User.create(userData)
    return "El usuario se créo correctamente"
}

module.exports = postUser;