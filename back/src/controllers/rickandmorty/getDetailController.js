const { default: axios } = require("axios");

const url = `https://rickandmortyapi.com/api/character/`;

const getDetail = async(id) =>{

    const data = (await axios(url + id)).data

    const charDetail = {
        name: data.name,
        status: data.status,
        gender: data.gender,
        species: data.species,
        image: data.image,
        origin: data.origin.name,
    }
    return charDetail;
}

module.exports = getDetail;