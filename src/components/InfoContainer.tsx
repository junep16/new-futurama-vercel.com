import { Error, Loading, InfoCard } from "."; 
import { useInfoData } from "../hooks/useInfoData";
import { Info } from "../types/info";

interface InfoContainerProps {
  name: string,
}


export const InfoContainer = ({ name }: InfoContainerProps) => {
  const { data, error } = useInfoData(name);

  if(error) return <Error />
  if(!data) return <Loading />

  return (
    <main>
      {data.map((infoData: Info) => {
        return (
          <InfoCard key={`${name}-info-data-${infoData.id}`} infoData={infoData} />
        )
      })}
    </main>
  )
}