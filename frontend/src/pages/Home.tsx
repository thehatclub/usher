import MiniCard from "@/components/MiniCard";
import Stats from "@/components/Stats";
import { Container, Flex } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Container>
        {/* Stats */}
        <Flex>
          <Stats />
        </Flex>

        {/* Discover */}
        <Flex>
          <MiniCard />
        </Flex>
      </Container>
    </>
  );
};

export default Home;
