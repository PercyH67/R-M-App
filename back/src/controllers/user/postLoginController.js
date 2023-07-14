const { User } = require("../../db")
const bcrypt = require("bcryptjs");

const getAllUser = async({ email, password }) =>{
    const dataAllUser = await User.findAll()

    const userFound = dataAllUser.find((user) => user.email === email);
  if (!userFound) throw new Error("El usuario no está registrado");

  const comparePassword = await bcrypt.compare(password, userFound.password);
  if (!comparePassword) throw new Error("Contraseña incorrecta");
    return "Inicio de sesión exitoso"
}

module.exports = getAllUser;