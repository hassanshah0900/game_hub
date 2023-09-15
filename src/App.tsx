import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { GameQuery } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "sidebar main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area={"nav"}>
        <NavBar onSearch={(search) => setGameQuery({ ...gameQuery, search })} />
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={"10px"}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelecteGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem
        justifySelf={{ base: "center", lg: "auto" }}
        maxWidth={{ base: "md", md: "3xl", lg: "100%" }}
        paddingX={"10px"}
        area={"main"}
      >
        <HStack marginBottom={"25px"} spacing={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            selectedSortValue={gameQuery.sortOrder}
            onSelectSort={(value) =>
              setGameQuery({ ...gameQuery, sortOrder: value })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
