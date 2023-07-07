const getFav = require("../../controllers/rickandmorty/getFavController")

const handlerGetFav = async(req, res) =>{
    try {
        const datafav = await getFav()
        res.status(200).json(datafav)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = handlerGetFav;