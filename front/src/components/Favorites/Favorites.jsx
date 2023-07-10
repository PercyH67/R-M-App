import { useDispatch, useSelector  } from "react-redux";
import Card from "../Card/Card"; 
import { filterCard, getFav, orderCard } from "../../redux/Actions"; 
import { useEffect } from "react";

const Favorites = () => {
    
    const dispatch = useDispatch();
    
    const myFavori = useSelector((state) => state.myFavorites)
    
    const handleClick = (e) =>{
        const {name, value} = e.target

        switch(name){
            case 'order':
                return dispatch(orderCard(value))
            case 'filter':
                return dispatch(filterCard(value))
            default: break
        }
    }
   useEffect(()=>{
    dispatch(getFav())
   }, [dispatch])

    return(
        <div className="flex flex-col items-center">
            <div className="flex mb-4 space-x-4">
                <select
                    name="order"
                    className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out focus:outline-none focus:bg-blue-200"
                    onClick={handleClick}
                >
                    <option value="order" disabled>--Order--</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select
                    name="filter"
                    className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out focus:outline-none focus:bg-blue-200"
                    onClick={handleClick}
                >
                    <option value="filter" disabled>--Filter--</option>
                    <option key="1" value="Male">Male</option>
                    <option key="2" value="Female">Female</option>
                    <option key="3" value="Genderless">Genderless</option>
                    <option key="4" value="unknown">unknown</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {myFavori?.map((character) => (
                    <Card
                    id={character.id}
                    key={character.id}
                    name={character.name}
                    species={character.species}
                    gender={character.gender}
                    image={character.image}
                    onClose={character.onClose}
                    className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                ))}
            </div>
        </div>
    )
}

export default Favorites;