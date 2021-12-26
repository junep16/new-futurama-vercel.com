import { Cast } from "../types/casts"

interface CastCardProps {
  castData: Cast
}

export const CastCard = ({ castData }: CastCardProps) => {
  const { 
    name, 
    born, 
    bio} = castData; 

  return (
    <div>
      <h2>{name}</h2>
      <ul>Born In
        <li>{born}</li>
      </ul>
      <a href={bio.url}>bio link</a>
    </div>
  )
}