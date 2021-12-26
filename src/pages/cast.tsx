import type { NextPage } from "next";
import { CastContainer } from "../components/CastContainer";

const CastPage: NextPage = () => {
  const name = 'cast';

  return (
    <div>
      <CastContainer name={name} />
    </div>
  )
}

export default CastPage;