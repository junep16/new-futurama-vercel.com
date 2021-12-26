import { Error, Loading, QuestionCard } from "."; 
import { useData } from "../hooks/useData";
import { Questions } from "../types/questions";

interface QuestionsContainerProps {
  name: string,
}

export const QuestionContainer = ({ name }: QuestionsContainerProps) => {
  const { data, error } = useData(name);
  
  if(error) return <Error />
  if(!data) return <Loading />

  return (
    <main>
      {data.map((questionData: Questions) => {
        return (
          <QuestionCard key={`${name}-question-data-${questionData.id}`} questionData={questionData} />
        )
      })}
    </main>
  )
}