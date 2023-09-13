import { Card, CardBody, Heading, Img } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
  return (
    <Card overflow={"hidden"} maxWidth={"lg"}>
      <Img src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
