const { Character } = require("../../db");
const characters = require("../../utils/data")

const allBulkCreate = async() =>{
    const data = await Character.bulkCreate(characters);
    return data
}

module.exports = allBulkCreate;