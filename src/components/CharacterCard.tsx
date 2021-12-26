import { Character } from "../types/characters"

interface CharacterCardProps {
  characterData: Character
}

export const CharacterCard = ({ characterData }: CharacterCardProps) => {
  const { 
    name, 
    images, 
    gender,   
    species,
    homePlanet,
    occupation,
    age, 
    sayings} = characterData;

    const sayingsList = sayings.map((value, index) => <li key={index}>{value}</li>);
    
  return (
    <div>
      <h2>{name.first} {name.middle} {name.last}</h2>
      <dl>
        <dt>gender</dt>
        <dd>{gender}</dd>
        <dt>age</dt>
        <dd>{age}</dd>
        <dt>species</dt>
        <dd>{species}</dd>
        <dt>home planet</dt>
        <dd>{homePlanet}</dd>
        <dt>occupation</dt>
        <dd>{occupation}</dd> 
      </dl>
      <ul>
        {sayingsList}
      </ul> 
    </div>
  )
}