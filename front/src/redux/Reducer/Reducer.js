import {ADD_MYFAVORITES, DELETE_MYFAVORITES, FILTER, ORDER} from '../Actions/types'
const initialState = {
    myFavorites: [],
    allCharacters: []
}
function rootReducer (state = initialState, action){
    switch (action.type) {
        case ADD_MYFAVORITES:
            const addFavorites = [...state.myFavorites, action.payload]
            const addAll = [...state.allCharacters, action.payload]
            return {
                ...state,
                myFavorites: addFavorites,
                allCharacters: addAll
            }
        case DELETE_MYFAVORITES:
            const deleteFavorites = state.myFavorites.filter(fav => fav.id !== action.payload)
            return {
                ...state,
                myFavorites:deleteFavorites
            }
        case FILTER:
            const filterCopy = [...state.allCharacters]
            const filter = filterCopy.filter(ch => ch.gender === action.payload)
            return {
                ...state,
                myFavorites: filter
            }
        case ORDER:
            const orderCopy = [...state.allCharacters]
            const order = orderCopy.sort()
            return {
                ...state,
                myFavorites: order
            }
    
        default:
            return state
    }
}

export default rootReducer