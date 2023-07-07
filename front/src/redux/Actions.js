const axios = require("axios")
export const ADD_CHARACTER = "ADD_CHARACTER"
export const DELETE_FAV = "DELETE_FAV"
export const ADD_FAV = "ADD_FAV"
export const ORDER = "ORDER"
export const FILTER = "FILTER"
export const GET_FAV = "GET_FAV"

export const addChar = (chr) => {
    return {
        type: ADD_CHARACTER,
        payload: chr
    }
}

export const addFav = (char) => {
    // return async (dispatch) => {
    //     try {
    //         const { data } = await axios.post("http://localhost:3001/rickandmorty/fav" , char)
    //         dispatch({ type: ADD_FAV, payload: data })
            
    //     } catch (error) {
    //         return error.message;
    //     }
    // }

    return {
        type: ADD_FAV,
        payload:char
    }
}

export const getFav = () =>{
    return async(dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/rickandmorty/fav")
          
            return dispatch({ type: GET_FAV, payload: data })
        } catch (error) {
            return error.message;
        }
    }
}
export const deleteFav = (id) => {
    return {
        type: DELETE_FAV,
        payload: id
    }
}
export const filterCard = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}
export const orderCard = (id) => {
    return {
        type: ORDER,
        payload: id
    }
}