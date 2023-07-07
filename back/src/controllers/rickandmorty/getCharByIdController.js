const { default: axios } = require("axios");

 
 const url = `https://rickandmortyapi.com/api/character/`;

 const getCharacter = async(id) =>{

    const data = (await axios.get(url + id)).data

    const infoChar = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            image: data.image
        }

        return infoChar
 }

 module.exports = getCharacter;