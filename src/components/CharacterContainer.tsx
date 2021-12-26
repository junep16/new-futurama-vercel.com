import { Error, Loading, CharacterCard } from "."; 
import { useData } from "../hooks/useData";
import { Character } from "../types/characters";

interface CharactersContainerProps {
  name: string,
}

export const CharacterContainer = ({ name }: CharactersContainerProps) => {
  const { data, error } = useData(name);
  
  if(error) return <Error />
  if(!data) return <Loading />

  return (
    <main>
      {data.map((characterData: Character) => {
        return (
          <CharacterCard key={`${name}-question-data-${characterData.id}`} characterData={characterData} />
        )
      })}
    </main>
  )
}