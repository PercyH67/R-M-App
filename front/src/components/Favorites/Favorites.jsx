import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import Styles from "./Favorites.module.css"
import {filterCards, orderCards} from '../../redux/Actions/Actions'

export function Favorites({myFavorites}) {
    
    const dispatch = useDispatch();
    const handleClick = (e) =>{
        const {name, value} = e.target
        switch(name){
            case 'order':
                return dispatch(orderCards(value))
            case 'filter':
                return dispatch(filterCards(value))
        }
    }

    return(
        <div className={Styles.container}>
            <div className={Styles.select}>
                <select name="order" onClick={handleClick}>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select name="filter" onClick={handleClick}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            {myFavorites?.map((character, index) => (
              <Card
                detailId={character.detailId} 
                key={index}
                name={character.name}
                species={character.species}
                gender={character.gender}
                image={character.image}
              />
            ))}
        </div>
    )
}
export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites
    }
}
export default connect(mapStateToProps, null)(Favorites)