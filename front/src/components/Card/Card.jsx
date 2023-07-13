
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFav, deleteChar, deleteFav} from "../../redux/Actions";

const Card = ({ id, name, species, gender, image }) => {

   const [isFav, setIsFav] = useState(false)

   const dispatch = useDispatch()
   const myFavori = useSelector((state) => state.favorites)

   
   const handleFavorite = () => {
      if (isFav) {
        dispatch(deleteFav(id));
        setIsFav(false);
      } else {
        dispatch(addFav({ id, name, species, gender, image }));
        setIsFav(true);
      }
    };
    
   const handleDelete = () => {
      dispatch(deleteChar(id));
      dispatch(deleteFav(id))
    };
    
    useEffect(() =>{
      myFavori.forEach(fav => {
         if (fav.id === id) {
            setIsFav(true)
         }
      })
   }, [myFavori, id])


   return (
      <div
         className="p-4 rounded-lg shadow-xl bg-gray-100 justify-center w-60 h-80 m-5 transform hover:scale-105 transition-transform duration-500 ease-in-out"
         style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
         }}
         >
         <div className="flex flex-wrap justify-between items-center">
            <button
               className="text-xl text-gray-500 transition-colors duration-300 ease-in-out hover:text-red-500 transform hover:scale-125"
               onClick={handleFavorite}
            >
               {!isFav ? "🤍" : "❤️"}
            </button>
            <button
               className="text-xl text-gray-500 transition-colors duration-300 ease-in-out hover:text-red-500 transform hover:scale-125"
               onClick={handleDelete}
            >
               X
            </button>
         </div>
         <Link
            style={{ textDecoration: "none" }}
            to={`/detail/${id}`}
            className="mt-4 block hover:opacity-90 transition-opacity duration-300 ease-in-out"
            >
            <h2 className="text-2xl font-extrabold mt-4 bg-slate-400 bg-opacity-70 text-center">{name}</h2>

            <div className="mt-40 bg-slate-400 bg-opacity-50">
               <h3 className="text-lg text-yellow-50 ">
                  {species}
               </h3>
               <h3 className="text-lg text-yellow-50">
                  {gender}
               </h3>
            </div>
         </Link>
      </div>
   );
}
export default Card;
