import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

function SearchInput() {
  return (
    <InputGroup>
      <InputLeftElement>
        <BsSearch />
      </InputLeftElement>
      <Input
        variant="filled"
        borderRadius="20px"
        placeholder="Search games..."
      />
    </InputGroup>
  );
}

export default SearchInput;
