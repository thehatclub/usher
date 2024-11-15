import { Box, Flex, Float, Image } from "@chakra-ui/react";
import { Avatar } from "./ui/avatar";

const Banner = () => {
  return (
    <>
      <Box position={"relative"}>
        <Flex maxW={"100vw"} maxH={"25vh"}>
          <Image
            fit={"cover"}
            align={"center"}
            src="https://image.tmdb.org/t/p/original/a6ptrTUH1c5OdWanjyYtAkOuYD0.jpg"
          />
        </Flex>
        <Float
          placement={"bottom-start"}
          offsetX={"50px"}
          offsetY={"50px"}
          p={"10px"}
          bgColor={"gray.900"}
          borderRadius={"10px"}
        >
          <Avatar
            bgColor={"transparent"}
            size={"2xl"}
            src="https://api.dicebear.com/9.x/micah/svg?seed=Leah"
          />
        </Float>
      </Box>
    </>
  );
};

export default Banner;
