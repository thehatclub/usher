import MiniCard from "@/components/MiniCard";
import Stats from "@/components/Stats";
import { Box, Container, Flex, Heading, useBreakpointValue } from "@chakra-ui/react";
import { Sparkles } from "lucide-react";

const Home = () => {
  // Determine layout direction based on screen size
  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });


  return (
    <>
      <Container
        my="50px"
      >
        {/* Stats Section */}
        <Box>
          <Flex
            justifyContent="center"
            gap="10"
            direction={flexDirection} // Adjust direction for responsiveness
            mb="20px"
            wrap={"wrap"}
          >
            <Stats component="progress" />
            <Stats component="count" />
            <Stats component="recommended" />
          </Flex>
        </Box>


        {/* Discover Section */}
        <Flex direction="column">
          <Heading
            my="20px"
            display="flex"
            alignItems="center"
            gap="10px"
            color="yellow.400"
          >
            <Sparkles />
            Discover
          </Heading>
          <Flex
            gap="5"
            wrap="wrap"
            maxW="100%"
            justifyContent="space-evenly"
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
      </Container >
    </>
  );
};

export default Home;
