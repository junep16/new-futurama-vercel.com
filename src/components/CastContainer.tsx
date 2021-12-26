import { Error, Loading, CastCard } from "."; 
import { useData } from "../hooks/useData";
import { Cast } from "../types/casts";

interface CastsContainerProps {
  name: string,
}

export const CastContainer = ({ name }: CastsContainerProps) => {
  const { data, error } = useData(name);
  
  if(error) return <Error />
  if(!data) return <Loading />

  return (
    <main>
      {data.map((castData: Cast) => {
        return (
          <CastCard key={`${name}-cast-data-${castData.id}`} castData={castData} />
        )
      })}
    </main>
  )
}