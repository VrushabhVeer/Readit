import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            size={"md"}
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
                fontSize={{ base: "20px", md: "23px" }}
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
            <Link to="/create">
              <Text>Create Blog</Text>
            </Link>
            <Text>Contact</Text>
          </HStack>

          <Link to="/login" color="#333d4a">
            <Text>Login</Text>
          </Link>
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
              <Text>Home</Text>
              <Link to="/blogs">
                <Text>Blog</Text>
              </Link>
              <Link to="/create">
                <Text>Create Blog</Text>
              </Link>
              <Text>Contact</Text>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
