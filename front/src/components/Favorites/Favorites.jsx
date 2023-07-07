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
        <div >
            <div >
                <select name="order" onClick={handleClick}>
                    <option value="order" disabled>--Order--</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select name="filter" onClick={handleClick}>
                    <option value="filter" disabled>--Filter--</option>
                    <option key="1" value="Male">Male</option>
                    <option key="2" value="Female">Female</option>
                    <option key="3" value="Genderless">Genderless</option>
                    <option key="4" value="unknown">unknown</option>
                </select>
            </div>
            {myFavori?.map(character => (
              <Card
                id={character.id} 
                key={character.id}
                name={character.name}
                species={character.species}
                gender={character.gender}
                image={character.image}
                onClose={character.onClose}
              />
            ))}
        </div>
    )
}

export default Favorites;