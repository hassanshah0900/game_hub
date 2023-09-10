import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
  return (
    <HStack justify={"space-between"} padding="10px">
      <Image src={logo} boxSize={"60px"}></Image>
      <Text>Navigation Bar</Text>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
