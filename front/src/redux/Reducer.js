import { ADD_CHARACTER, DELETE_FAV, ADD_FAV, FILTER, ORDER, GET_FAV} from "./Actions"

const initialState = {
    allRick: [],
    myFavorites: [],
    allFavorites:[],
    allCharacter: []
}

function rootReducer  (state = initialState, action){
    switch (action.type) {
        case ADD_CHARACTER:
            return {
                ...state,
                allRick: action.payload
            }
        case GET_FAV:
            return {
                ...state,
                allFavorites: action.payload
            }
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharacter, action.payload],
                allCharacter: [...state.allCharacter, action.payload],
              
            }
        case DELETE_FAV:
            const deleteFavorite = state.myFavorites.filter(fav => fav.id !== action.payload)
            return {
                ...state,
                myFavorites: deleteFavorite
            }
            case FILTER:
                const filterCopy = [...state.allCharacter]
                const filter = filterCopy.filter(ch => ch.gender === action.payload)
                return {
                    ...state,
                    myFavorites: filter
                }
            case ORDER:
                const newOrder = [...state.myFavorites].sort((a, b) => {
                    if ("Ascendente" === action.payload) {
                      return a.id - b.id
                    }
                    if ("Descendente" === action.payload) {
                      return b.id - a.id
                    }
                    return 0;
                  });
                return {
                    ...state,
                    myFavorites: newOrder
                }
    
        default:
            return {...state}
    }
}

export default rootReducer;