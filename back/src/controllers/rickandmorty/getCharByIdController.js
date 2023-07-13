
const { Character } = require("../../db")

 const getCharacter = async(id) =>{
    const dataCharId = await Character.findByPk(id)
    return dataCharId;
 }

 module.exports = getCharacter;