import { Info } from "../types/info"
import styled from "@emotion/styled"

interface InfoCardProps {
  infoData: Info
}

export const InfoCard = ({ infoData }: InfoCardProps) => {
  const { synopsis, yearsAired, creators } = infoData;
  return (
    <SectionStyle>
      <ArticleStyle>
        <Title>Futurama synopsis</Title>
        <ParagraphStyle>{synopsis}</ParagraphStyle>
        <ParagraphInfo>
          <p><span> Years Aired: {yearsAired}</span></p>
          <p><span>Directors: {creators[0].name}, {creators[1].name}</span></p>
        </ParagraphInfo> 
      </ArticleStyle>
    </SectionStyle>
  )
}

const SectionStyle = styled.section`
height: 100vh;  
`
const ArticleStyle = styled.article`
position: relative; 
margin: 0 auto; 
width: 60%; 
height: 600px; 
padding: 20px;
background-color: #434A73; 
border-radius: 10px;
box-shadow: 0px 0px 26px 5px rgba(133,177,255,0.66);
`

const Title = styled.h2`
margin: 0 auto;
`
const ParagraphStyle = styled.p`
margin-top: 100px;
`
const ParagraphInfo = styled.p`
font-size: 14px; 
`