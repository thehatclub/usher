import {
  Box,
  Flex,
  Heading,
  Text,
  Badge,
  Card,
  HStack,
  Image,
  Button,
  useBreakpointValue,
  Float
} from "@chakra-ui/react";
import { ProgressBar, ProgressRoot } from "@/components/ui/progress";
import { BookmarkPlus, Film, ScanEye, BookOpenCheck } from "lucide-react";

const Progress = () => {

  return (
    <>
      <Box
        py={"70px"}
        px={"80px"}
        bgColor={"gray.900"}
        borderRadius={"10px"}
        alignContent={"center"}
        position={"relative"}
      >
        <Float offset={"50%"} color={"gray.500"} opacity={"10%"}><BookOpenCheck size={"15rem"} /></Float>
        <Flex direction={"column"} textAlign={"center"}>
          <Heading size={"7xl"}>50%</Heading>
          <Text fontSize={"xl"} color={"gray.400"}>Titles Watched</Text>
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
        py={"70px"}
        px={"100px"}
        bgColor={"gray.100"}
        color={"gray.900"}
        borderRadius={"10px"}
        alignContent={"center"}
        textAlign={"center"}
        position={"relative"}
      >
        <Float offset={"50%"} color={"gray.500"} opacity={"10%"}><ScanEye size={"15rem"} /></Float>
        <Heading size={"7xl"}>28</Heading>
        <Text fontSize={"xl"} color={"gray.600"}>Unwatched</Text>
      </Box>
    </>
  );
};
const Recommended = () => {
  const screen = useBreakpointValue({ base: 'xs', md: 'lg' });

  return (
    <>
      <Card.Root
        flexDirection="row"
        overflow="hidden"
        borderRadius={"10px"}
        maxW={"vh"}

      >
        <Image
          objectFit="cover"
          maxW="40%"
          src="https://image.tmdb.org/t/p/original/jlbUx0aHJupDVDlCo0R7UxSaUUd.jpg"
          alt="Caffe Latte"
        />
        <Box>
          <Card.Body>
            <Card.Title mb="2">Dan Da Dan</Card.Title>

            <HStack mt="4">
              <Badge colorPalette={"red"}>TV-MA</Badge>
              <Badge colorPalette={"green"}>87% Score</Badge>
            </HStack>
          </Card.Body>
          <Card.Footer>
            <Button
              bgColor="yellow.400"
              size={screen}
            >
              <BookmarkPlus />
              Add to List
            </Button>
            <Button
              size={screen}
            >
              <Film />
              Watch Trailer
            </Button>
          </Card.Footer>
        </Box>
      </Card.Root>
    </>
  );
};

const Stats = ({ component }) => {
  return (
    <>
      {component === "progress" && <Progress />}
      {component === "count" && <Count />}
      {component === "recommended" && <Recommended />}
    </>
  );
};

export default Stats;
