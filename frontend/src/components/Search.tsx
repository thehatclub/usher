import { Input, Kbd } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { LuSearch } from "react-icons/lu";

const Search = () => {
  return (
    <>
      <InputGroup
        flex="1"
        startElement={<LuSearch />}
        endElement={<Kbd>⌘K</Kbd>}
        maxW={"50%"}
      >
        <Input placeholder="Search Media" />
      </InputGroup>
    </>
  );
};

export default Search;
