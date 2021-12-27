import { Cast } from "../types/casts"
import styled from "@emotion/styled"

interface CastCardProps {
  castData: Cast
}

export const CastCard = ({ castData }: CastCardProps) => {
  const { 
    name, 
    born, 
    bio} = castData; 

  return ( 
    <SectionStyle>
      <ArticleStyle> 
        <CastList>{name}
          <CastInfo>born in: {born}</CastInfo>
        </CastList>
            <BioLink href={bio.url}>biography</BioLink>
      </ArticleStyle>
    </SectionStyle>
  )
}

const TitleStyle = styled.h1`
font-size: 18px; 
`
const SectionStyle = styled.section`
height: 50%; 
width: 60%; 
margin: 0 auto; 
`
const ArticleStyle = styled.div` 
display: flex;  
align-items: center;
justify-content: space-between; 
width: 100%; 
height: 60px; 
margin-bottom: 20px;
padding: 20px;
background-color: #434A73; 
border-radius: 10px;  
`

const CastList = styled.ul`
display: flex;  
`
const BioLink = styled.a`
width: 100px; 
height: 30px;
border-radius: 10px;
background-color: #8D9FBE; 
color: black; 
text-align: center;
line-height: 2; 
`

const CastInfo = styled.p`
margin: 0 50px; 
`