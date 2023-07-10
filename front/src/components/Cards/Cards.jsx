import Card from '../Card/Card';

const Cards = (props) => {
   const { characters } = props;
   return (
    <div className="p-10 justify-center">
        <div className="flex flex-wrap mx-4">
        {characters.map((character) => (
            <Card
            key={character.name}
            id={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={() => props.onClose(character.id)}
            className="w-1/2 p-10"
            />
        ))}
        </div>
    </div>
   );
}

export default Cards
