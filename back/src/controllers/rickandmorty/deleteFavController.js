const { Favority } = require("../../db");

const deleteFav = async(id) =>{
    const favDelete = await Favority.destroy({
        where: {
          id: id
        }})
    return favDelete;
}

module.exports = deleteFav;