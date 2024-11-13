import {
  Box,
  Flex,
  Heading,
  Text,
  Badge,
  HStack,
  Image,
  Button,
  Float,
  VStack,
} from "@chakra-ui/react";
import { ProgressBar, ProgressRoot } from "@/components/ui/progress";
import { BookmarkPlus, Film, ScanEye, BookOpenCheck } from "lucide-react";

const Progress = () => {
  return (
    <>
      <Box
        py={{ base: "50px", lg: "70px" }}
        px={{ base: "50px", md: "80px" }}
        maxW={{ base: "50%", md: "unset" }}
        bgColor={"gray.900"}
        borderRadius={"10px"}
        alignContent={"center"}
        position={"relative"}
      >
        <Float
          offset={"50%"}
          color={"gray.500"}
          opacity={"10%"}
          w={{ base: "60%", md: "15rem" }}
        >
          <BookOpenCheck size={"100%"} />
        </Float>
        <Flex direction={"column"} textAlign={"center"}>
          <Heading size={{ base: "5xl", md: "7xl" }}>50%</Heading>
          <Text fontSize={{ base: "md", md: "xl" }} color={"gray.400"}>
            Titles Watched
          </Text>
        </Flex>
        <ProgressRoot mt={"20px"} size={"xl"}>
          <ProgressBar />
        </ProgressRoot>
      </Box>
    </>
  );
};
const Count = () => {
  return (
    <>
      <Box
        py={{ base: "60px", md: "70px" }}
        px={{ base: "60px", md: "100px" }}
        maxW={{ base: "50%", md: "unset" }}
        bgColor={"gray.100"}
        color={"gray.900"}
        borderRadius={"10px"}
        alignContent={"center"}
        textAlign={"center"}
        position={"relative"}
      >
        <Float
          offset={"50%"}
          color={"gray.500"}
          opacity={"10%"}
          w={{ base: "60%", md: "15rem" }}
        >
          <ScanEye size={"100%"} />
        </Float>
        <Heading size={{ base: "5xl", md: "7xl" }}>28</Heading>
        <Text fontSize={{ base: "md", md: "xl" }} color={"gray.600"}>
          Unwatched
        </Text>
      </Box>
    </>
  );
};
const Recommended = () => {
  return (
    <>
      <Flex
        borderRadius={"10px"}
        bgColor={"gray.700"}
        borderColor={"gray.700"}
        borderWidth={"10px"}
        maxW={{ base: "100%", md: "600px" }}
      >
        <Image
          borderLeftRadius={"10px"}
          w="30%"
          src="https://image.tmdb.org/t/p/original/6qfZAOEUFIrbUH3JvePclx1nXzz.jpg"
          alt="Dan Da Dan"
        />
        <Flex
          bgColor={"gray.900"}
          borderRightRadius={"10px"}
          direction={"column"}
          spaceY="5"
          alignItems={"end"}
          justifyContent={"center"}
          w={"vw"}
          px={"20px"}
        >
          <VStack>
            <Heading>Dan Da Dan</Heading>
            <HStack>
              <Badge colorPalette={"red"}>TV-MA</Badge>
              <Badge colorPalette={"green"}>87% Score</Badge>
            </HStack>
          </VStack>
          <HStack>
            <Button bgColor="yellow.400" size={{ base: "xs", md: "md" }}>
              <BookmarkPlus />
              Add to List
            </Button>
            <Button size={{ base: "xs", md: "md" }}>
              <Film />
              Watch Trailer
            </Button>
          </HStack>
        </Flex>
      </Flex>
    </>
  );
};

const Stats = ({ tile }) => {
  return (
    <>
      {tile === "progress" && <Progress />}
      {tile === "count" && <Count />}
      {tile === "recommended" && <Recommended />}
    </>
  );
};

export default Stats;
