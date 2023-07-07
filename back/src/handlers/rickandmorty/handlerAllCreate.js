
const allBulkCreate = require("../../controllers/rickandmorty/allCreateController")

const handlerAllCreate = async(req, res) =>{
    try {
        const all = await allBulkCreate();
        res.status(200).json(all);

      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

module.exports = handlerAllCreate;