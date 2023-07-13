const { Favority } = require("../../db")

const postFav = async({id, name, gender, species, image, status, origin}) =>{
    const data = await Favority.create({id, name, gender, species, image, status, origin})
    return data;
}

module.exports = postFav;