
const allCharacter = require("../../controllers/rickandmorty/getAllCharacterController");

const handlerGetChar = async(req, res) => {
    try {
        const dataChar = await allCharacter()
        res.status(200).json(dataChar);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = handlerGetChar;