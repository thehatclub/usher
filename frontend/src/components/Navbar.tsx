import { Avatar } from "@/components/ui/avatar";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from "@/components/ui/menu";
import { Flex, Heading, Image, Link } from "@chakra-ui/react";
import Search from "./Search";
import {
  DoorOpen,
  HardDriveUpload,
  Home,
  ListTodo,
  Telescope,
} from "lucide-react";

const Navbar = () => {
  const menuItems = [
    {
      name: "Home",
      link: "/",
      icon: Home,
    },
    {
      name: "Discover",
      link: "/discover",
      icon: Telescope,
    },
    {
      name: "Watchlist",
      link: "/watchlist",
      icon: ListTodo,
    },
    {
      name: "Open File...",
      icon: DoorOpen,
    },
    {
      name: "Export List",
      icon: HardDriveUpload,
    },
  ];

  return (
    <>
      <Flex bgColor={"gray.900"} p={"20px"} gap={5} justify={"space-between"}>
        <Link variant={"plain"} href="/">
          <Image src="/crown-coin.svg" width={"2.5rem"} />
          <Heading minW={"max-content"}>Usher: Media Discovery</Heading>
        </Link>

        <Search />

        <MenuRoot>
          <MenuTrigger>
            <Avatar
              bgColor={"transparent"}
              name="pfp"
              src="https://api.dicebear.com/9.x/micah/svg?seed=Leah"
            />
          </MenuTrigger>
          <MenuContent bgColor={"gray.900"}>
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <>
                  {item.name === "Watchlist" ? <MenuSeparator /> : null}
                  <MenuItem
                    color={item.name === "Open File..." ? "red.500" : "unset"}
                    key={index}
                    asChild
                    value={item.name}
                  >
                    <a href={item.link}>
                      <IconComponent size={"15px"} />
                      {item.name}
                    </a>
                  </MenuItem>
                  {item.name === "Watchlist" ? <MenuSeparator /> : null}
                </>
              );
            })}
          </MenuContent>
        </MenuRoot>
      </Flex>
    </>
  );
};

export default Navbar;
