import { Flex, Link } from "@chakra-ui/react";
import MiniCard from "./MiniCard";
import { Sparkles, Film, Tv, Brush } from "lucide-react";

// Mapping of icon names to their corresponding components
const iconMapping: any = {
  Sparkles: Sparkles,
  Film: Film,
  Tv: Tv,
  Brush: Brush,
};

const Categories = () => {
  const categories = [
    {
      name: "Discover",
      color: "yellow.400",
      icon: "Sparkles",
    },
    {
      name: "Movies",
      color: "red.400",
      icon: "Film",
    },
    {
      name: "Television",
      color: "green.400",
      icon: "Tv",
    },
    {
      name: "Anime",
      color: "purple.400",
      icon: "Brush",
    },
  ];

  return (
    <>
      {categories.map((item, index) => {
        const IconComponent = iconMapping[item.icon];
        return (
          <Flex direction="column" key={index} my={"50px"}>
            <Link color={item.color}>
              {/* Render the icon component */}
              <IconComponent />
              {item.name}
            </Link>
            <Flex gap={"5"} maxW={"100%"} overflow={"hidden"}>
              <MiniCard />
              <MiniCard />
              <MiniCard />
              <MiniCard />
              <MiniCard />
            </Flex>
          </Flex>
        );
      })}
    </>
  );
};

export default Categories;
