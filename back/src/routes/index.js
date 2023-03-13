
const express = require("express")
const axios = require("axios")
const cors = require("cors")
const app = express()

app.use(cors())

app.use(express.json())

const url = `https://rickandmortyapi.com/api/character/`;

app.get("/rickandmorty/character/:id", async (req, res)=>{
    const {id} = req.params;
    try {
        const character = await axios(url + id)
        const response = character.data;

        const infoChar = {
            id: response.id,
            name: response.name,
            gender: response.gender,
            species: response.species,
            image: response.image
        }
        res.status(200).json(infoChar)
    } catch (error) {
        res.status(404).send(error.message)
        
    }
});

app.get("/rickandmorty/detail/:detailId", async(req, res) =>{
    const {detailId} = req.params;
    try {
        const detail = await axios(url + detailId)
        const response = detail.data;

        const charDetail = {
            name: response.name,
            status: response.status,
            gender: response.gender,
            species: response.species,
            image: response.image,
            origin: response.origin,
        }
        res.status(200).json(charDetail)
    } catch (error) {
        res.status(404).send(error.message)
        
    }
});

let fav = [];

app.get("/rickandmorty/fav", (req, res)=>{
    res.status(200).json(fav)
})

app.post("/rickandmorty/fav", (req, res)=>{
    fav.push(req.body)
    res.status(200).json(fav)
})

app.delete("/rickandmorty/fav/:id", (req, res)=>{
    const {id} = req.params;

    const charFilter = fav.filter(char => char.id !== Number(id))
    fav = charFilter;
    res.status(200).json(charFilter)

})
module.exports = app;