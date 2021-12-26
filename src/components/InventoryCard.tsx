import { Inventory } from "../types/inventory"

interface InventoryCardProps {
    inventoryData: Inventory
}

export const InventoryCard = ({ inventoryData }: InventoryCardProps) => {
  const { 
    title, 
    category, 
    description,
    slogan,
    price,
    stock} = inventoryData; 

  return (
    <div>
      <h2>{title}</h2>
      <ul>
          <li>category {category}</li>
          <li>{description}</li>
          <li>slogan {slogan}</li>
          <li>price {price}</li>
          <li>stock {stock}</li>
      </ul>
    </div>
  )
}