const postFav = require("../../controllers/rickandmorty/postFavController")

const handlerPostFav = async(req, res) =>{
    try {
        const {id, name, gender, species, image } = req.body;
        const dataFav = await postFav({id, name, gender, species, image})
        res.status(200).json(dataFav)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = handlerPostFav;