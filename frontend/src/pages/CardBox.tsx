import MiniCard from "@/components/MiniCard";
import {
  MenuContent,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { ArrowUpWideNarrow, SquarePlus, TriangleAlert } from "lucide-react";
import { useState } from "react";

const CardBox = ({ page, data }) => {
  const [value, setValue] = useState("All");
  const watchlist = [];
  const review = [];
  const category = [];
  const status = ["All", "Completed", "Planned", "On-Hold", "Watching"];

  return (
    <>
      <Box minH={"100vh"}>
        <Flex p={"20px"} borderTopWidth={"1px"} bgColor={"gray.900"}>
          <Heading>Your Watchlist</Heading>
        </Flex>

        <Flex m={"10px"} maxW={"100vw"} direction={"column"} spaceY={"20px"}>
          <Flex
            gap={"5"}
            bgColor={"gray.900"}
            p={"20px"}
            borderWidth={"1px"}
            borderColor={"gray.800"}
            borderRadius={"10px"}
            justifyContent={"space-between"}
          >
            <Flex gap={"5"}>
              <Heading>{value}</Heading>
              <MenuRoot>
                <MenuTrigger asChild>
                  <Button variant={"surface"} size="xs">
                    <ArrowUpWideNarrow />
                  </Button>
                </MenuTrigger>
                <MenuContent minW="10rem">
                  <MenuRadioItemGroup
                    value={value}
                    onValueChange={(e) => setValue(e.value)}
                  >
                    {status.map((item, index) => (
                      <MenuRadioItem key={index} value={item}>
                        {item}
                      </MenuRadioItem>
                    ))}
                  </MenuRadioItemGroup>
                </MenuContent>
              </MenuRoot>
            </Flex>

            <Flex gap={"5"}>
              <Button variant={"surface"} colorPalette={"blue"} size={"xs"}>
                <SquarePlus />
                Add Media
              </Button>
              <Button variant={"surface"} colorPalette={"yellow"} size={"xs"}>
                <TriangleAlert />
                Items for Review
              </Button>
            </Flex>
          </Flex>
          <Flex wrap={"wrap"} gap={"10"} justifyContent={"center"}>
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />

            {page === "watchlist" && <></>}
            {page === "review" && <></>}
            {page === "category" && <></>}
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default CardBox;
