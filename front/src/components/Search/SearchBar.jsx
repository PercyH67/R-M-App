import { useState } from 'react';
import { getCharById } from '../../redux/Actions';
import { useDispatch } from 'react-redux';

const SearchBar = () => {

   const dispatch = useDispatch()
   const [id, setId] = useState('')
   
   const handleChange =(e)=>{
      const {value} = e.target;
      setId(value)
   }
   const handlerClick = ()=>{
      dispatch(getCharById(id))
   }
   
   return (
      <div className="px-52">
         <div className="flex">
            <input
               className="flex-1 px-4 py-2 rounded-l-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
               type="search"
               name="search"
               placeholder="Search"
               onChange={handleChange}
            />
            <button
               className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg font-bold"
               onClick={handlerClick}
            >
               Agregar
            </button>
         </div>
      </div>
   );
}
export default SearchBar;