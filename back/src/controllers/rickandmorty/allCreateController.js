const { Character } = require("../../db");
const axios = require("axios")

// No esta subiendo a la base de datos por terminar 
const allBulkCreate = async() =>{
    try {
        const response = await axios.get("https://rickandmortyapi.com/api/character");
        const apiData = response.data.results;
        const dataChar = apiData.map((character) => ({
          id: character.id,
          name: character.name,
          species: character.species,
          status: character.status,
          origin: character.origin.name,
          gender: character.gender,
          image: character.image,
        }));
        await Character.bulkCreate(dataChar);
        return dataChar;
      } catch (error) {
        console.error("Error al insertar en la base de datos:", error);
        return error;
      }
}

module.exports = allBulkCreate;