import { Badge, Box, Card, Heading, IconButton } from "@chakra-ui/react";
import { BookmarkPlus, Film } from "lucide-react";
import { Tooltip } from "@/components/ui/tooltip";

const MiniCard = () => {
  return (
    <>
      <Tooltip content="One Piece" positioning={{ placement: "top" }}>
        <Card.Root
          h={"250px"}
          w={"200px"}
          bgPos={"center"}
          bgSize={"cover"}
          bgImg={
            "url(https://image.tmdb.org/t/p/original/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg)"
          }
          borderWidth={"10px"}
          borderColor={"gray.900"}
          placeItems={"center"}
        >
          <Card.Body gap="2">
            <Card.Title
              bgColor={"gray.900"}
              p={"10px"}
              borderRadius={"10px"}
              textAlign={"center"}
              spaceY={"2"}
            >
              <Heading>One Piece</Heading>
              <Box display={"flex"}>
                <Badge size={"xs"} colorPalette={"red"}>
                  TV-MA
                </Badge>
                <Badge size={"xs"} colorPalette={"green"}>
                  87% Score
                </Badge>
              </Box>
            </Card.Title>
          </Card.Body>
          <Card.Footer>
            <IconButton
              bgColor={"yellow.400"}
              size={"sm"}
              borderWidth={"3px"}
              borderColor={"gray.900"}
            >
              <BookmarkPlus />
            </IconButton>
            <IconButton bgColor={"gray.900"} color={"gray.100"} size={"sm"}>
              <Film />
            </IconButton>
          </Card.Footer>
        </Card.Root>
      </Tooltip>
    </>
  );
};

export default MiniCard;
