
const { Favority } = require("../../db")

const getFav = async() =>{
    const data = await Favority.findAll()
    return data
}

module.exports = getFav;
