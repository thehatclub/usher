import { Badge, Flex, Heading, IconButton } from "@chakra-ui/react";
import { BookmarkPlus, Film } from "lucide-react";
import { Tooltip } from "@/components/ui/tooltip";

const MiniCard = () => {
  return (
    <>
      {/* Add hover coard functionallity as a portal to specific media page */}
      <Tooltip content="One Piece" positioning={{ placement: "top" }}>
        <Flex
          maxW={"250px"}
          minW={"200px"}
          minH={"300px"}
          borderWidth={"10px"}
          borderColor={"gray.700"}
          borderRadius={"10px"}
          alignContent={"center"}
          justifyContent={"space-between"}
          direction={"column"}
          bgColor={"gray.700"}
        >
          <Flex
            maxW={"250px"}
            maxH={"3rem"}
            bgColor={"gray.900"}
            justifyContent={"center"}
            p={"5px"}
            borderTopRadius={"10px"}
          >
            <Heading truncate>One Piece </Heading>
          </Flex>
          <Flex
            bgPos={"bottom"}
            bgSize={"cover"}
            bgImg={
              "url(https://image.tmdb.org/t/p/original/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg)"
            }
            minH={"210px"}
          />
          <Flex
            justifyContent={"space-between"}
            bgColor={"gray.900"}
            alignItems={"center"}
            p={"10px"}
            gap={"2"}
            borderBottomRadius={"10px"}
          >
            <IconButton bgColor={"yellow.400"} size={"sm"}>
              <BookmarkPlus />
            </IconButton>
            <Flex direction={"column"} gap="1" alignItems={"center"}>
              <Badge colorPalette={"red"}>TV-MA</Badge>
              <Badge colorPalette={"green"}>87%</Badge>
            </Flex>
            <IconButton size={"sm"}>
              <Film />
            </IconButton>
          </Flex>
        </Flex>
      </Tooltip>
    </>
  );
};

export default MiniCard;
