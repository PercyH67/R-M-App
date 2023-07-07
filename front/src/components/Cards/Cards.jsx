import Card from '../Card/Card';

const Cards = (props) => {
   const { characters } = props;
   return (
       <div>
        <div style={{display: "flex"}}>
            {characters.map(character =>(
                <Card
                key= {character.name}
                id = {character.id}
                name= {character.name}
                species= {character.species}
                gender= {character.gender}
                image= {character.image}
                onClose= {()=> props.onClose(character.id)}
                />
            ))}
        </div>
   </div>);
}

export default Cards
