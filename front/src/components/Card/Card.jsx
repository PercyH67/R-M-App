
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFav, deleteFav } from "../../redux/Actions";
import axios from "axios"

const Card = ({ id, name, species, gender, image, onClose}) => {

   const [isFav, setIsFav] = useState(false)
   const dispatch = useDispatch()
   const myFavori = useSelector((state) => state.myFavorites)

   
   const handleFavorite = async() => {
      if (isFav) {
         setIsFav(false)
         dispatch(deleteFav(id))
      } else{
         setIsFav(true)
         dispatch(addFav({id, name, species, gender, image, onClose}))

         const data = {id, name, species, gender, image}
         try {
           await axios.post("http://localhost:3001/rickandmorty/fav", data)
            
         } catch (error) {
           return error
         }
      }
   }

   useEffect(() =>{
      myFavori.forEach(fav => {
         if (fav.id === id) {
            setIsFav(true)
         }
      })
   }, [myFavori, id])


   const superDelete = () => {
       onClose(id)
       dispatch(deleteFav(id))
    }
   return (
      <div >
         <div >
          
            <button onClick={handleFavorite}>{ !isFav? "🤍" : "❤️" } </button>
            <button onClick={superDelete}>X</button>
         </div> 
               <h2>{name}</h2>
               
               <Link style={{textDecoration:'none'}} to={`/Detail/${id}`}>
                  <img src={image} alt={name} />
               </Link>
               <div >
                  <h3>{species}</h3>
                  <h3>{gender}</h3>
               </div>
      </div>
   );
}
export default Card;
