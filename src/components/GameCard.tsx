import { Card, CardBody, HStack, Heading, Img } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconLIst from "./PlatformIconLIst";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
  return (
    <Card overflow={"hidden"} maxWidth={"lg"}>
      <Img src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconLIst
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore criticScore={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
