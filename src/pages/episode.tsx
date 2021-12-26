import type { NextPage } from "next";
import { EpisodeContainer } from "../components/EpisodeContainer";

const EpisodePage: NextPage = () => {
  const name = 'episodes';

  return (
    <div>
      <EpisodeContainer name={name} />
    </div>
  )
}

export default EpisodePage;