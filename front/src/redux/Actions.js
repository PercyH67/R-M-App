import axios from "axios"

export const ADD_CHAR = "ADD_CHAR"
export const DELETE_FAV = "DELETE_FAV"
export const ADD_FAV = "ADD_FAV"
export const ORDER = "ORDER"
export const FILTER = "FILTER"
export const GET_FAV = "GET_FAV"
export const GET_CHAR_BY_ID = "GET_CHAR_BY_ID"
export const DELETE_CHAR = "DELETE_CHAR"

export const getCharById = (id) =>{
    return async (dispatch) =>{
        try {
            const { data } = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
            dispatch({type: GET_CHAR_BY_ID, payload: data})
        } catch (error) {
            return error
        }
    }
}

export const addChar = () => {
   return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/rickandmorty/characters");
      return dispatch({ type: ADD_CHAR, payload: data });
    } catch (error) {
        return error
    }
  }; 
} 

export const addFav = (dataFav) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post("http://localhost:3001/rickandmorty/fav", dataFav);
            dispatch({ type: ADD_FAV, payload: data });
        } catch (error) {
            return error.message;
        }
    }
}

export const getFav = () =>{
    return async(dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/rickandmorty/fav")
            dispatch({ type: GET_FAV, payload: data })
        } catch (error) {
            return error.message;
        }
    }
}
export const deleteFav = (id) => {
    return async(dispatch) => {
        try {
            const { data } = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
            dispatch({ type: DELETE_FAV, payload: data })
        } catch (error) {
            return error;
        }
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

export const deleteChar = (id) => {
    return {
        type: DELETE_CHAR,
        payload : id
    }
}