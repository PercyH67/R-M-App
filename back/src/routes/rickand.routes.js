const routeRick = require("express").Router();

const handlerGetFav = require("../handlers/rickandmorty/handlerGetFav")
const handlerPostFav = require("../handlers/rickandmorty/handlerPostFav")
const handlerDeleteFav = require("../handlers/rickandmorty/handlerDeleteFav")
const handlerCharacter = require("../handlers/rickandmorty/handlerGetChar")
const handlerDetail = require("../handlers/rickandmorty/handlerGetDetail");
const handlerAllCreate = require("../handlers/rickandmorty/handlerAllCreate");
const handlerGetChar = require("../handlers/rickandmorty/handlerGetAllChar")

routeRick.get("/characters", handlerGetChar)
routeRick.get("/allCreate",  handlerAllCreate)
routeRick.get("/fav", handlerGetFav)
routeRick.post("/fav", handlerPostFav)
routeRick.delete("/fav/:id", handlerDeleteFav)
routeRick.get("/character/:id", handlerCharacter)
routeRick.get("/detail/:id", handlerDetail)


module.exports = routeRick;