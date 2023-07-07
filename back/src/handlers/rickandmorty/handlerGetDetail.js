const getDetail = require("../../controllers/rickandmorty/getDetailController")

const handlerDetail = async(req, res) =>{
    try {
        const {id} = req.params;
        const data = await getDetail(id);
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json({error: error.message})
        
    }
}

module.exports = handlerDetail;