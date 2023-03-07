import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import {addFavorites, deleteFavorites} from '../../redux/Actions/Actions'
import {connect} from 'react-redux'
import { useEffect, useState } from 'react';


export function Card(props) {
console.log(props);
   const [isFav, setIsFav] = useState(false)

   useEffect(() =>{
      props.myFavorites?.forEach((fav) =>{
         if (fav.id === props.detailId) {
            setIsFav(true)
         }
      })
   }, [props.myFavorites])

   function handleFavorite() {
      if (isFav) {
         setIsFav(false)
         props.deleteFavorites(props.detailId)
      } else{
         setIsFav(true)
         props.addFavorites(props)
      }
   }

   return (
      <div className={styles.conteiner}>
         <div className={styles.buttonConteiner}>
            { isFav ?(
               <button onClick={handleFavorite}>❤️</button>
               ) : (
               <button onClick={handleFavorite}>🤍</button>
               )
            }
            <button onClick={props.onClose}>X</button>
         </div> 
            <Link style={{textDecoration:'none'}} to={`/detail/${props.detailId}`}>
               <h2>{props.name}</h2>
               
               <img className={styles.image} src={props.image} alt={props.name} />
               <div className={styles.data}>
                  <h3>{props.species}</h3>
                  <h3>{props.gender}</h3>
               </div>
            </Link>
      </div>
   );
}

export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}

export function mapDispatchToProps(dispatch) {
   return {
      addFavorites: function (char) {
         dispatch(addFavorites(char))
      },
      deleteFavorites: function (id) {
         dispatch(deleteFavorites(id))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)