const { Character } = require("../../db")

const allCharacter = async() =>{
    const dataChar = await Character.findAll()
    return dataChar
}

module.exports = allCharacter;