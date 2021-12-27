import { Questions } from "../types/questions"
import styled from "@emotion/styled"

interface QuestionCardProps {
  questionData: Questions
}

export const QuestionCard = ({ questionData }: QuestionCardProps) => {
  const { 
    id, 
    question, 
    possibleAnswers,      
    correctAnswer } = questionData;

    const possibleAnswerList = possibleAnswers.map((value, index) => <li key={index}>{value}</li>);

  return (
    <SectionStyle>
      <ArticleStyle>
        <TitleStyle>{id}. {question}</TitleStyle>
        <AnswerList>
          {possibleAnswerList}
        </AnswerList>
        <p>Correct Answer: {correctAnswer}</p>
      </ArticleStyle>
    </SectionStyle>
  )
}

const SectionStyle = styled.section`
height: 50%; 
width: 40%; 
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
const AnswerList = styled.ul`
list-style: number;  
line-height: 1.5;
<%li{
  margin: 0 10px;
}
`