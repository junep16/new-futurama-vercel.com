import { Questions } from "../types/questions"

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
    <div>
      <h2>{id}. {question}</h2>
      <ul>
        {possibleAnswerList}
      </ul>
      <p>{correctAnswer}</p>
    </div>
  )
}