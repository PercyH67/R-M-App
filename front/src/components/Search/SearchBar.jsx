import { useState } from 'react';

const SearchBar = (props) => {
   const [id, setId] = useState('')
   
   const handleChange =(e)=>{
      const {value} = e.target;
      setId(value)
   }
   
   return (
      <div>
         <input type='search' name='search' placeholder='Search' onChange={handleChange}/>
         <button onClick={() => props.onSearch(id)}>Agregar</button> 
      </div>
   );
}
export default SearchBar;