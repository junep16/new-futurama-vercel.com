import { Character } from "../types/characters"
import styled from "@emotion/styled"

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
    <SectionStyle>
      <ArticleStyle>
      <Title>{name.first} {name.middle} {name.last}</Title>
        <ImageStyle src={ images.main } alt="character image" />
        <li>gender: {gender}</li> 
        <li>age: {age}</li> 
        <li>species: {species}</li> 
        <li>home planet: {homePlanet}</li> 
        <li>occupation: {occupation}</li> 
      </ArticleStyle>
      <SayingList>
        {sayingsList}
      </SayingList> 
   </SectionStyle>
  )
}

const SectionStyle = styled.section`
height: 70vh;  
`
const Title = styled.h2`
margin: 10px auto;

`
const ArticleStyle = styled.ul`
position: relative; 
margin: 0 350px; 
width: 60%; 
height: 200px; 
padding: 20px;
background-color: #434A73; 
border-radius: 10px;
box-shadow: 0px 0px 26px 5px rgba(133,177,255,0.66);
list-style: none; 

<%li {
  margin: 10px 0; 
}
`
const SayingList = styled.ul`
margin: 50px 350px; 
width: 60%; 
height: 200px; 
padding: 20px;
background-color: #434A73; 
border-radius: 10px;
box-shadow: 0px 0px 26px 5px rgba(133,177,255,0.66);
list-style: none; 
overflow-y: scroll; 

`
const ImageStyle = styled.img`
position: absolute; 
top: 0;
left: -180px;
width: 120px;
`
