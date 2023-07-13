const { Favority } = require("../../db");

const getFav = async() =>{

    const dataFav = await Favority.findAll();
    return dataFav;
}

module.exports = getFav;