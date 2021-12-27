import { Inventory } from "../types/inventory"
import styled from "@emotion/styled"

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
    <SectionStyle> 
      <ArticleStyle>
        <TitleStyle>{title}</TitleStyle>
        <InventoryList>
            <li>Category: {category}</li>
            <li>{description}</li>
            <li>Slogan: {slogan}</li>
            <li>Price: {price}</li>
            <li>Stock: {stock}</li>
        </InventoryList>
      </ArticleStyle>
    </SectionStyle>
  )
}

const SectionStyle = styled.section`
height: 40%; 
width: 40%; 
margin: 0 auto; 
` 
const ArticleStyle = styled.section`
display: flex; 
flex-direction: column; 
justify-content: center; 
padding: 20px; 
box-sizing: border-box;  
height: 250px; 
width: 100%; 
margin-bottom: 50px; 
background-color: #434A73; 
border-radius: 10px;
box-shadow: 0px 0px 26px 5px rgba(133,177,255,0.66);
`
const TitleStyle = styled.h1`
margin: 0;
`
const InventoryList = styled.ul`
list-style: none;  
line-height: 1.5;
<%li{
  margin: 0 10px;
}
`