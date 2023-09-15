import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
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
    <>
      <Heading
        fontSize={{ base: "2xl", xl: "4xl" }}
        marginBottom={{ base: 4, xl: 8 }}
      >
        Genre
      </Heading>
      <List>
        {genres.map((genre) => (
          <ListItem paddingBottom={{ base: "10px", xl: "15px" }} key={genre.id}>
            <HStack>
              <Image
                objectFit="cover"
                borderRadius={"5px"}
                boxSize={{ base: "35px", xl: "50px" }}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                onClick={() => {
                  onSelecteGenre(genre);
                }}
                variant="link"
                fontSize={{ base: "lg", xl: "2xl" }}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
