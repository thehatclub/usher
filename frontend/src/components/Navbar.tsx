import { Avatar } from "@/components/ui/avatar";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from "@/components/ui/menu";
import Search from "./Search";
import { Box, Flex, Heading } from "@chakra-ui/react";
import {
  DoorOpen,
  HardDriveUpload,
  Home,
  ListTodo,
  Telescope,
  UserPen,
} from "lucide-react";

const Navbar = () => {
  return (
    <>
      <Flex bgColor={"gray.900"} p={"20px"} gap={4} justify={"space-between"}>
        <Flex alignItems={"center"} gap={3}>
          <Avatar src="/crown-coin.svg" />
          <Heading minW={"max-content"}>Usher:Media Discovery</Heading>
        </Flex>

        <Search />

        <MenuRoot>
          <MenuTrigger>
            <Avatar
              name="pfp"
              src="https://api.dicebear.com/9.x/micah/svg?seed=Leah"
            />
          </MenuTrigger>
          <MenuContent bgColor={"gray.900"}>
            <MenuItem asChild value="home">
              <a href="/">
                <Home size={"15px"} />
                Home
              </a>
            </MenuItem>
            <MenuItem asChild value="discover">
              <a href="/discover">
                <Telescope size={"15px"} />
                Discover
              </a>
            </MenuItem>
            <MenuSeparator />
            <MenuItem asChild value="profile">
              <a href="/profile">
                <UserPen size={"15px"} />
                Profile
              </a>
            </MenuItem>
            <MenuItem asChild value="watchlist">
              <a href="/watchlist">
                <ListTodo size={"15px"} />
                Watchlist
              </a>
            </MenuItem>
            <MenuSeparator />
            <MenuItem value="open-file" color={"red.500"}>
              <DoorOpen size={"15px"} />
              Open File...
            </MenuItem>
            <MenuItem value="export">
              <HardDriveUpload size={"15px"} />
              Export List
            </MenuItem>
          </MenuContent>
        </MenuRoot>
      </Flex>
    </>
  );
};

export default Navbar;
