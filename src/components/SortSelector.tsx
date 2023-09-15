import {
  Button,
  Menu,
  Text,
  MenuButton,
  MenuItem,
  MenuList,
  HStack,
  Highlight,
} from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

function SortSelector() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by:{" "}
        <Highlight
          query="Relevance"
          styles={{ color: "white", fontWeight: "bold" }}
        >
          Relevance
        </Highlight>
        {/* <HStack>
          <Text>Order by:</Text> <Text fontWeight="bold">Relevence</Text>
        </HStack> */}
      </MenuButton>
      <MenuList>
        <MenuItem value="">Relevance</MenuItem>
        <MenuItem value="added">Date added</MenuItem>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="released">Release date</MenuItem>
        <MenuItem value="metacritic">Popularity</MenuItem>
        <MenuItem value="rating">Average rating</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
