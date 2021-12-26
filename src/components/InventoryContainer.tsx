import { Error, Loading, InventoryCard } from "."; 
import { useData } from "../hooks/useData";
import { Inventory } from "../types/inventory";

interface InventoryContainerProps {
  name: string,
}

export const InventoryContainer = ({ name }: InventoryContainerProps) => {
  const { data, error } = useData(name);
  
  if(error) return <Error />
  if(!data) return <Loading />

  return (
    <main>
      {data.map((inventoryData: Inventory) => {
        return (
          <InventoryCard key={`${name}-inventory-data-${inventoryData.id}`} inventoryData={inventoryData} />
        )
      })}
    </main>
  )
}