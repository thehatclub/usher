import Banner from "@/components/Banner";
import Stats from "@/components/Stats";
import Calendar from "@/components/Calendar";
import { Box, Flex } from "@chakra-ui/react";

const Proile = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minH="100vh"
      >
        <Banner />
        <Flex>
          <Stats />
          <Stats />
        </Flex>
        <Flex>
          <Stats />
        </Flex>
        <Flex>
          <Stats />
          <Stats />
        </Flex>
        <Flex>
          <Calendar />
        </Flex>
      </Box>
    </>
  );
};

export default Proile;
