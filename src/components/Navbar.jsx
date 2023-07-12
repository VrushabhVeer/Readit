import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  Stack,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
  Center,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import user from "../assets/profile.png";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogout = () => {
    localStorage.clear();
  };

  let userName = localStorage.getItem("userName");

  return (
    <>
      <Box
        bg="gray.100"
        px={{ base: "4", md: "12" }}
        position="sticky"
        top="0"
        className="nav"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"lg"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            variant={"ghost"}
            _hover={{ variant: "ghost" }}
          />

          <Box>
            <Link to="/">
              <Text
                color="#333d4a"
                fontSize={{ base: "20px", md: "24px" }}
                fontWeight="bold"
              >
                Read<span className="it">it.</span>
              </Text>
            </Link>
          </Box>

          <HStack
            as={"nav"}
            spacing={5}
            display={{ base: "none", md: "flex" }}
            color="#333d4a"
          >
            <Link to="/">
              <Text>Home</Text>
            </Link>
            <Link to="/blogs">
              <Text>Blogs</Text>
            </Link>
            <Link to="/myblogs">
              <Text>My Blogs</Text>
            </Link>
            <Link to="/create">
              <Text>Create</Text>
            </Link>

            <Link to="/contact">
              <Text>Contact</Text>
            </Link>
          </HStack>

          <HStack spacing={5}>
            <Link to="/login" color="#333d4a">
              <Text display={{ base: "none", md: "flex" }}>Login</Text>
            </Link>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"sm"} src={user} />
              </MenuButton>
              <MenuList>
                <Center>
                  <Text className="userName">
                    {localStorage.getItem("userName") ? userName : "Username"}
                  </Text>
                </Center>
                <MenuDivider />
                <Link to="/myblogs">
                  <MenuItem>Your Blogs</MenuItem>
                </Link>
                <Link to="/login">
                  <MenuItem onClick={handleLogout}>
                    {localStorage.getItem("token") ? "Logout" : "Login"}
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={5} pt={5} display={{ md: "none" }}>
            <Stack
              as={"nav"}
              fontSize="15px"
              spacing={5}
              ml="4"
              color="#333d4a"
            >
              <Link to="/blogs">
                <Text>Blogs</Text>
              </Link>
              <Link to="/myblogs">
                <Text>My Blogs</Text>
              </Link>
              <Link to="/create">
                <Text>Create</Text>
              </Link>
              <Link to="/contact">
                <Text>Contact</Text>
              </Link>
              <Link to="/login">
                <Text>Login</Text>
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
