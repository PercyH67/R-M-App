const deleteFav = require("../../controllers/rickandmorty/deleteFavController")

const handlerDeleteFav = async (req, res) =>{
    try {
        const { id } = req.params;
        const favDelete = await deleteFav(id)
        res.status(200).json(favDelete);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = handlerDeleteFav;