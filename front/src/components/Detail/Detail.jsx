import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom';

const Detail = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${id}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [id]);

     return( 
      <div style={{height: "650px"}} className="flex flex-col items-center pt-10">
         <Link to='/home'>
         <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mb-4">Go Back</button>
         </Link>
         <div className='flex items-center'>
            <div className="bg-white p-4 rounded-lg shadow-lg my-10 h-64">
               <h1 className="text-3xl font-bold mb-4 text-center">{character.name}</h1>
               <h2 className="text-lg py-2">STATUS: <b className="text-blue-500">{character.status}</b></h2>
               <h2 className="text-lg py-2">GENDER: <b className="text-blue-500">{character.gender}</b></h2>
               <h2 className="text-lg py-2">SPECIE: <b className="text-blue-500">{character.species}</b></h2>
               <h2 className="text-lg py-2">ORIGIN: <b className="text-blue-500">{character.origin}</b></h2>
            </div>
            <div className='p-8 rounded-lg shadow-lg mx-20 '>
               <img src={character.image} alt={character.name} className="w-96 h-96 rounded-lg mb-4" />
            </div>
         </div>
         
      </div>
    )
}

export default Detail