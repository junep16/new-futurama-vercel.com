import { Info } from "../types/info"

interface InfoCardProps {
  infoData: Info
}

export const InfoCard = ({ infoData }: InfoCardProps) => {
  const { synopsis, yearsAired, creators } = infoData;
  return (
    <div>
      <h2>Futurama synopsis</h2>
      <p>{synopsis}</p>
      <p>{yearsAired}</p>
      <p>{creators[0].name}</p>
      <p>{creators[1].name}</p>
    </div>
  )
}