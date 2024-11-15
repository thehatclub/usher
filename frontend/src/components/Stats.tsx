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
        h={"50%"}
        w={"50%"}
        py={"20%"}
        bgColor={"gray.900"}
        borderRadius={"10px"}
        position={"relative"}
        textAlign={"center"}
      >
        <Float offset={"50%"} color={"gray.500"} opacity={"10%"} w={"60%"}>
          <BookOpenCheck size={"unset"} />
        </Float>
        <Float offset={"50%"}>
          <Box>
            <Heading size={"3xl"}>50%</Heading>
            <Text fontSize={"md"} color={"gray.400"}>
              Watched
            </Text>
            <ProgressRoot mt={"20px"} size={"xl"}>
              <ProgressBar />
            </ProgressRoot>
          </Box>
        </Float>
      </Box>
    </>
  );
};
const Count = () => {
  return (
    <>
      <Box
        h={"50%"}
        w={"50%"}
        py={"20%"}
        bgColor={"gray.100"}
        color={"gray.900"}
        borderRadius={"10px"}
        textAlign={"center"}
        position={"relative"}
      >
        <Float offset={"50%"} color={"gray.500"} opacity={"10%"} w={"60%"}>
          <ScanEye size={"unset"} />
        </Float>
        <Float offset={"50%"}>
          <Box>
            <Heading size={"3xl"}>28</Heading>
            <Text fontSize={"md"} color={"gray.600"}>
              Unwatched
            </Text>
          </Box>
        </Float>
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
        minH={{ base: "25%", lg: "100%" }}
      >
        <Image
          borderLeftRadius={"10px"}
          w="25%"
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
          w={"75%"}
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
            <Button bgColor="yellow.400" size={{ base: "sm", md: "md" }}>
              <BookmarkPlus />
              Add to List
            </Button>
            <Button size={{ base: "sm", md: "lg" }}>
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
