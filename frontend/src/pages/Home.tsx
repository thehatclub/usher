import MiniCard from "@/components/MiniCard";
import Stats from "@/components/Stats";
import { Container, Flex, Heading } from "@chakra-ui/react";
import { Sparkles } from "lucide-react";

const Home = () => {
  return (
    <>
      <Container
        my={"50px"}
        divideY={"1px"}
        divideColor={"gray.500"}
        divideStyle={"dashed"}
      >
        {/* Stats */}
        <Flex justifyContent={"center"} gap={"20"} flex={"wrap"} mb={"20px"}>
          <Stats component={"progress"} />
          <Stats component={"count"} />
          <Stats component={"recommended"} />
        </Flex>
        {/* Discover */}
        <Flex flexDirection={"column"}>
          <Heading
            my={"20px"}
            display={"flex"}
            alignItems={"center"}
            gap={"10px"}
            color={"yellow.400"}
          >
            <Sparkles />
            Discover
          </Heading>
          <Flex
            gap={"5"}
            wrap={"wrap"}
            maxW={"100%"}
            justifyContent={"space-evenly"}
          >
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Home;
