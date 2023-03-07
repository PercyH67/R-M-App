import { ADD_MYFAVORITES, DELETE_MYFAVORITES, FILTER, ORDER} from "./types";
import axios from "axios"

export function addFavorites(char) {
    
   return async (dispatch)=>{
        const response = await axios.post("http://localhost:3001/rickandmorty/fav", char)
        const data = response.data;

        return dispatch({
            type: ADD_MYFAVORITES,
            payload: data
        })
   }
}
export function deleteFavorites(id) {
    return async (dispatch)=>{
        const response = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
        console.log(response.data);
    const data = response.data;

     return dispatch({
        type: DELETE_MYFAVORITES,
        payload: data
     })
   }
}
export function filterCards(status) {
    return {
        type: FILTER,
        payload: status
    }
}
export function orderCards(id) {
    return {
        type: ORDER,
        payload: id
    }
}