import { Text, HStack, List, ListItem, Image, Spinner } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

function GenreList() {
  const { data: genres, isLoading } = useGenre();
  return (
    <List>
      {isLoading && <Spinner />}
      {genres.map((genre) => (
        <ListItem paddingBottom={"10px"} key={genre.id}>
          <HStack>
            <Image
              borderRadius={"5px"}
              boxSize={"35px"}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize={"md"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
