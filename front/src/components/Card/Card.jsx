
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
      <div className="p-4 rounded shadow-lg bg-slate-200 justify-center w-60 m-5">
         <div className="flex flex-wrap justify-between items-center ">
            <button
               className="text-2xl text-gray-500 transition-colors duration-300 ease-in-out hover:text-red-500 transform hover:scale-125"
               onClick={handleFavorite}
            >
               {!isFav ? "🤍" : "❤️"}
            </button>
            <button
               className="text-xl text-gray-500 transition-colors duration-300 ease-in-out hover:text-red-500 transform hover:scale-125"
               onClick={superDelete}
            >
               X
            </button>
         </div>
         <h2 className="text-2xl font-bold mt-2">{name}</h2>
         <Link
            style={{ textDecoration: "none" }}
            to={`/Detail/${id}`}
            className="mt-4 block hover:opacity-75 transition-opacity duration-300 ease-in-out"
         >
            <img src={image} alt={name} className="w-52 rounded" />
         </Link>
         <div className="mt-4">
            <h3 className="text-lg">{species}</h3>
            <h3 className="text-lg">{gender}</h3>
         </div>
      </div>
   );
}
export default Card;
