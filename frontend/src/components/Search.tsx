import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { LuSearch } from "react-icons/lu";

const Search = () => {
  return (
    <>
      <InputGroup
        flex="1"
        startElement={<LuSearch />}
        maxW={"50%"}
      >
        <Input placeholder="Search" />
      </InputGroup>
    </>
  );
};

export default Search;
