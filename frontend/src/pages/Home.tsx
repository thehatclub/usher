import MiniCard from "@/components/MiniCard";
import Stats from "@/components/Stats";
import { Box, Container, Flex, Link } from "@chakra-ui/react";
import { Sparkles } from "lucide-react";

const Home = () => {
  return (
    <>
      <Container py="50px">
        {/* Stats Section */}
        <Flex direction={{ base: "column", lg: "row" }} w={"100%"} gap={"5"}>
          <Flex minW={"50%"} gap={"5"}>
            <Stats tile="progress" />
            <Stats tile="count" />
          </Flex>
          <Box
            alignSelf={"center"}
            maxW={{ base: "unset", md: "75%", lg: "50%" }}
          >
            <Stats tile="recommended" />
          </Box>
        </Flex>

        {/* Discover Section */}
        <Flex direction="column" maxH={"75%"}>
          <Link my="20px" color="yellow.400" fontSize={"2xl"}>
            <Sparkles />
            Discover
          </Link>
          <Flex gap="5" wrap="wrap" maxW="100%" justifyContent="space-evenly">
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
