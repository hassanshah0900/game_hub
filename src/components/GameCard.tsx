import { Card, CardBody, Heading, Img, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconLIst from "./PlatformIconLIst";

interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
  return (
    <Card overflow={"hidden"} maxWidth={"lg"}>
      <Img src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatformIconLIst
          platforms={game.parent_platforms.map(({ platform }) => platform)}
        />
      </CardBody>
    </Card>
  );
}

export default GameCard;
