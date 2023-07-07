const getCharacter = require("../../controllers/rickandmorty/getCharByIdController")

const handlerCharacter = async(req, res) =>{
    try {
        const {id} = req.params;
        const data = await getCharacter(id)
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = handlerCharacter;