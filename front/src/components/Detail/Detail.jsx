import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import styles from './Detail.module.css'
import { Link } from 'react-router-dom';

export default function Detail (props){
    const {detailId} = useParams();
    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
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
     }, [detailId]);
     console.log(character);

     return( 
         <div className={styles.container}>
            <Link style={{textDecoration:'none'}} to='/home'>
               <button>Go Back</button>
            </Link>
            <div>
               <h1>{character.name}</h1>
               <img style={{borderRadius: "999999px", width: "250px",}} src={character.image} alt={character.name} />
               <h2>STATUS: {character.status}</h2>
               <h2>GENDER: {character.gender}</h2>
               <h2>SPECIE: {character.species}</h2>
               <h2>ORIGIN: {character.origin?.name}</h2>
            </div>
            
         </div>
    )
}