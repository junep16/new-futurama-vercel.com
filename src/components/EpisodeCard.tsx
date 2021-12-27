import { Episode } from "../types/episodes"
import styled from "@emotion/styled"

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
    <SectionStyle>
      <ArticleStyle>
        <TitleStyle><span>{number}. </span>{title}</TitleStyle>
        <InfoList>
            <li>Writers: {writers}</li> 
            <li>Original air date: {originalAirDate}</li> 
        </InfoList>
        <InfoList>Description
            <li>{desc}</li>
        </InfoList> 
      </ArticleStyle>
    </SectionStyle>
  )
}

const SectionStyle = styled.section`
height: 50%; 
width: 60%; 
margin: 0 auto; 
`

const ArticleStyle = styled.section`
display: flex; 
flex-direction: column; 
justify-content: center;
padding: 20px; 
box-sizing: border-box;  
height: 300px; 
width: 100%; 
margin-bottom: 50px; 
background-color: #434A73; 
border-radius: 10px;
box-shadow: 0px 0px 26px 5px rgba(133,177,255,0.66);
`
const TitleStyle = styled.h1`
margin: 0;
`
const InfoList = styled.ul`
list-style:none;  
line-height: 1.5;
<%li{
  margin: 0 10px;
}
`