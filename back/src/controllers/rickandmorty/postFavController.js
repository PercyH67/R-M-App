const {Favority} = require("../../db")


const postFav = async({id, name, gender, species, image}) =>{
    const data = await Favority.create({id, name, gender, species, image})
    return data;
}

module.exports = postFav;