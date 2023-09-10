import { HStack, Image, Text, Switch } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

interface Props {
  onCheck: (isChecked: boolean) => void;
}

function NavBar() {
  return (
    <HStack justify={"space-between"}>
      <Image src={logo} boxSize={"60px"}></Image>
      <Text>Navigation Bar</Text>
      <Switch mr={2}></Switch>
    </HStack>
  );
}

export default NavBar;
