const deleteFav = require("../../controllers/rickandmorty/deleteFavController")


const handlerDeleteFav = (req, res) =>{
    res.send("esto es la ruta de eliminar favoritos")
}

module.exports = handlerDeleteFav;