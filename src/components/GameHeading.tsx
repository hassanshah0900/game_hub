import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../hooks/useGames";

interface Props {
  gameQuery: GameQuery;
}
function GameHeading({ gameQuery }: Props) {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading size="2xl" as="h1">
      {heading}
    </Heading>
  );
}

export default GameHeading;
