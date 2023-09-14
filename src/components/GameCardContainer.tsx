import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Box
      minWidth={"300px"}
      borderRadius={"10px"}
      overflow={"hidden"}
      maxWidth={"sm"}
    >
      {children}
    </Box>
  );
}

export default GameCardContainer;