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
} from "@chakra-ui/react";
import { ProgressBar, ProgressRoot } from "@/components/ui/progress";
import { BookmarkPlus, Film } from "lucide-react";

const Progress = () => {
  return (
    <>
      <Box
        p={"30px"}
        px={"40px"}
        bgColor={"gray.900"}
        borderRadius={"10px"}
        alignContent={"center"}
      >
        <Flex direction={"column"} textAlign={"center"}>
          <Heading>50%</Heading>
          <Text color={"gray.400"}>Titles Watched</Text>
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
        p={"30px"}
        px={"40px"}
        bgColor={"gray.100"}
        color={"gray.900"}
        borderRadius={"10px"}
        textAlign={"center"}
        alignContent={"center"}
      >
        <Heading>28</Heading>
        <Text color={"gray.500"}>Titles Watched</Text>
      </Box>
    </>
  );
};
const Recommended = () => {
  return (
    <>
      <Card.Root
        flexDirection="row"
        overflow="hidden"
        borderRadius={"10px"}
        maxHeight={"200px"}
        maxW={"40%"}
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
            <Button bgColor={"yellow.400"}>
              <BookmarkPlus />
              Add to List
            </Button>
            <Button>
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
