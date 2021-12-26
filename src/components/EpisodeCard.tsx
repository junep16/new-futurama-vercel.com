import { Episode } from "../types/episodes"

interface EpisodeCardProps {
    episodeData: Episode
}

export const EpisodeCard = ({ episodeData }: EpisodeCardProps) => {
  const { 
    number, 
    title, 
    writers,
    originalAirDate,
    desc} = episodeData; 

  return (
    <div>
      <h2><span>{number}. </span>{title}</h2>
      <dl>
          <dt>Writers</dt>
          <dd>{writers}</dd>
          <dt>Original air date</dt>
          <dd>{originalAirDate}</dd> 
      </dl>
      <ul>Description
          <li>{desc}</li>
      </ul> 
    </div>
  )
}