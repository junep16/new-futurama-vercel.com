import { Error, Loading, EpisodeCard } from "."; 
import { useData } from "../hooks/useData";
import { Episode } from "../types/episodes";

interface EpisodeContainerProps {
  name: string,
}

export const EpisodeContainer = ({ name }: EpisodeContainerProps) => {
  const { data, error } = useData(name);
  
  if(error) return <Error />
  if(!data) return <Loading />

  return (
    <main>
      {data.map((episodeData: Episode) => {
        return (
          <EpisodeCard key={`${name}-episode-data-${episodeData.id}`} episodeData={episodeData} />
        )
      })}
    </main>
  )
}