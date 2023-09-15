import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import usePlatforms from "../hooks/usePlatforms";

function PlatformSelector() {
  const { data } = usePlatforms();
  return (
    <Menu>
      <MenuButton
        marginBottom={"10px"}
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
