import { Flex, Link, Box, Float } from "@chakra-ui/react";
import MiniCard from "@/components/MiniCard";
import {
  Sparkles,
  Film,
  Tv,
  Brush,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const Discover = () => {
  const cardContainer = document.getElementById("cardContainer");

  const cardsRight = () => {
    cardContainer.scrollLeft += 50;
  };
  const cardsLeft = () => {
    cardContainer.scrollLeft -= 50;
  };

  const categories = [
    {
      name: "Discover",
      color: "yellow.400",
      icon: Sparkles,
    },
    {
      name: "Movies",
      color: "red.400",
      icon: Film,
    },
    {
      name: "Television",
      color: "green.400",
      icon: Tv,
    },
    {
      name: "Anime",
      color: "purple.400",
      icon: Brush,
    },
  ];

  return (
    <>
      {categories.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <Flex direction="column" key={index} m={"30px"}>
            <Link color={item.color} fontSize={"2xl"} my={"20px"}>
              {/* Render the icon component */}
              <IconComponent />
              {item.name}
            </Link>
            <Box position={"relative"} mr={"20px"}>
              <Flex
                gap={"5"}
                maxW={"100vw"}
                overflowX={"scroll"}
                scrollbar={"hidden"}
                id="cardContainer"
              >
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
              </Flex>
              <Float
                placement={"middle-end"}
                color={"gray.300"}
                bgColor={"gray.600"}
                py={"40px"}
                opacity={"80%"}
                borderRadius={"10px"}
                id="slideRight"
                onClick={cardsRight}
              >
                <ChevronRight size={"2rem"} />
              </Float>
              <Float
                placement={"middle-start"}
                color={"gray.300"}
                bgColor={"gray.600"}
                py={"40px"}
                opacity={"80%"}
                borderRadius={"10px"}
                id="slideLeft"
                onClick={cardsLeft}
              >
                <ChevronLeft size={"2rem"} />
              </Float>
            </Box>
          </Flex>
        );
      })}
    </>
  );
};

export default Discover;
