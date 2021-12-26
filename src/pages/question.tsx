import type { NextPage } from "next";
import { QuestionContainer } from "../components/QuestionContainer";

const QuestionPage: NextPage = () => {
  const name = 'questions';

  return (
    <div>
      <QuestionContainer name={name} />
    </div>
  )
}

export default QuestionPage;