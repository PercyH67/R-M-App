const postUser = require("../../controllers/user/postUserController");

const handlerPostUser = async(req, res) =>{
    try {
        const {name, password, email, image} = req.body;
        const userData = await postUser({name, password, email, image});
        res.status(200).json(userData)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = handlerPostUser;