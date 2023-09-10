import { Grid, GridItem, Show } from "@chakra-ui/react";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "sidebar main"`,
      }}
    >
      <GridItem area={"nav"} bg={"dodgerblue"}>
        Navigation
      </GridItem>
      <Show above="lg">
        <GridItem area={"sidebar"} bg={"green"}>
          SideBar
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"gold"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
