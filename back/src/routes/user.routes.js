
const routeUser = require("express").Router()

const handlerPostUser = require("../handlers/user/handlerPostUser")
const handlerPostLogin = require("../handlers/user/handlerPostLogin")


routeUser.post("/", handlerPostLogin)
routeUser.post("/register", handlerPostUser)


module.exports = routeUser;