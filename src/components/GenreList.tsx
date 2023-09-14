import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useGenre, { Genre } from "../hooks/useGenre";

interface Props {
  onSelecteGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ onSelecteGenre, selectedGenre }: Props) {
  const { data: genres, isLoading, error } = useGenre();
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <List>
      {genres.map((genre) => (
        <ListItem paddingBottom={"10px"} key={genre.id}>
          <HStack>
            <Image
              borderRadius={"5px"}
              boxSize={"35px"}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => {
                onSelecteGenre(genre);
              }}
              variant="link"
              fontSize={"md"}
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
