import { Flex, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Flex
        marginTop={"auto"}
        justifyContent={"center"}
        p={"15px"}
        bg={"gray.900"}
      >
        <Link variant={"underline"} color={"yellow.400"} target="_blank" href="https://github.com/thehatclub">Usher | The Hat Club 2024</Link>
      </Flex >
    </>
  );
};

export default Footer;
