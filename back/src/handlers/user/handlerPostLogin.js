const postLoginUser = require("../../controllers/user/postLoginController");

const handlerPostLogin = async(req, res) =>{
    try {
        const { email, password } = req.body;
        const dataAllUser = await postLoginUser({ email, password })
        res.status(200).json(dataAllUser);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = handlerPostLogin;