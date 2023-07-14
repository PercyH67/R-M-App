import { DELETE_FAV, ADD_FAV, FILTER, ORDER, GET_FAV, GET_CHAR_BY_ID, ADD_CHAR, DELETE_CHAR, POST_USER, LOGIN_USER} from "./Actions"

const initialState = {
    characters: [],
    favorites: [],
    myFavorites: [],
    allFavorites: [],
    allCharacter: [],
    allDetail: [],
    allUser: [],
    dataUser: '',
}

const rootReducer = (state = initialState, { type, payload }) =>{
    switch (type) {

        case GET_FAV:
            return {
                ...state,
                favorites: payload,
                myFavorites: payload
            }
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload],
              
            }
        case DELETE_FAV:
            const deleteFavorite = state.myFavorites.filter(fav => fav.id !== payload)
            return {
                ...state,
                myFavorites: deleteFavorite
            }
            case FILTER:
                const filterCopy = [...state.favorites]
                const filter = filterCopy.filter(ch => ch.gender === payload)
                return {
                    ...state,
                    myFavorites: filter
                }
            case ORDER:
                const newOrder = [...state.myFavorites].sort((a, b) => {
                    if ("Ascendente" === payload) {
                      return a.id - b.id
                    }
                    if ("Descendente" === payload) {
                      return b.id - a.id
                    }
                    return 0;
                  });
                return {
                    ...state,
                    myFavorites: newOrder
                }
            case ADD_CHAR:
                return {
                    ...state,
                    characters: payload
                }
            case GET_CHAR_BY_ID:
                return {
                    ...state,
                    allCharacter:[...state.allCharacter, payload],
                    allDetail: payload
                }

            case DELETE_CHAR:
                const deleteChar = state.allCharacter.filter(char => char.id !== payload)
                return {
                    ...state,
                    allCharacter: deleteChar
                }
            case POST_USER:
                return {
                    ...state,
                    allUser: [...state.allUser, payload]
                }
        
            case LOGIN_USER:
                return {
                    ...state,
                    dataUser: payload
                }
        
        default:
            return {...state}
    }
}

export default rootReducer;