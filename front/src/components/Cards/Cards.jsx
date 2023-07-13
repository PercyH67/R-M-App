import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import { useEffect } from 'react';
import { addChar } from '../../redux/Actions';

const Cards = () => {

    const dispatch = useDispatch()
    const allCharacter = useSelector((state)=> state.allCharacter)

    useEffect(()=>{
        dispatch(addChar())
    }, [dispatch])

    return (
    <div className="p-10 justify-center">
        <div className="flex flex-wrap mx-4">
        {allCharacter?.map((character) => (
            <Card
            key={character.name}
            id={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            className="w-1/2 p-10"
            />
        ))}
        </div>
    </div>
   );
}

export default Cards
