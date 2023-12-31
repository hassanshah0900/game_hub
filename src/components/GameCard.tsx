import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconLIst from "./PlatformIconLIst";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
  const platforms = game.parent_platforms
    ? game.parent_platforms.map(({ platform }) => platform)
    : [];
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody paddingTop="10px">
        <HStack marginBottom={1} justifyContent={"space-between"}>
          <PlatformIconLIst platforms={platforms} />
          <CriticScore criticScore={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
