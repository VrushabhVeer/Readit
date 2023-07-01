import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import blogging from "../assets/Blogging-pana.png";

const Home = () => {
  return (
    <>
      <Flex
        w={{ base: "90%", md: "80%" }}
        m="auto"
        alignItems="center"
        gap={{ base: "0", md: "20" }}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
      >
        <Box w="100%">
          <Text
            fontSize={{ base: "90px", md: "110px", lg: "130px" }}
            color="#333d4a"
            fontFamily="poppins"
            fontWeight="900"
          >
            <span className="bloger">Read</span>it.
          </Text>

          <Text color="#333d4a">
            Create a beautiful blog that fits your style. Whather sharing your
            expertise, breaking news, or whatever’s on your mind, you’re in good
            company on Blogger. Sign up to published your passions here.
          </Text>

          <Link to="/create">
            <Button
              bg="none"
              mt="8"
              _hover={{ bg: "none" }}
              borderRadius="none"
              className="button-52"
              role="button"
              fontWeight="medium"
              color="white"
              px="8"
            >
              Create Your Blog
            </Button>
          </Link>
        </Box>

        <Box w="100%">
          <Image w="100%" src={blogging} alt="Blogging-pana" />
        </Box>
      </Flex>

      <Box w={{ base: "90%", md: "80%" }} m="auto" mt={{ base: "0", md: "16" }}>
        <Text
          color="#333d4a"
          fontSize={{ base: "35px", md: "45px" }}
          fontWeight="bold"
        >
          Trending
        </Text>

        {/* 1st */}
        <Flex
          w="100%"
          mt="10"
          flexDirection={{ base: "column", md: "row" }}
          gap="10"
        >
          <Box w="100%">
            <Image
              src="https://images.unsplash.com/photo-1615419235091-59bf9cbd530b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
              alt="blogImg"
            />
          </Box>

          <Box w="100%">
            <Text
              fontWeight="bold"
              fontSize={{ base: "20px", md: "30px" }}
              color="#333d4a"
            >
              Writing A Novel with A Heart
            </Text>
            <Text mt="4" color="grey">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </Text>
            <Text
              mt="4"
              cursor="pointer"
              fontStyle="italic"
              color="grey"
              textDecoration="underline"
            >
              Read More
            </Text>
            <Flex
              mt="6"
              gap="5"
              fontStyle="italic"
              fontSize="14px"
              fontWeight="bold"
              color="grey"
            >
              <Box>
                <i className="fa-solid fa-pen"></i> John Rolex
              </Box>
              <Box>12/03/2023</Box>
              <Box>
                3 <i className="fa-solid fa-comment"></i>
              </Box>
            </Flex>
          </Box>
        </Flex>

        {/* 2nd */}

        <Flex
          w="100%"
          mt="10"
          flexDirection={{ base: "column", md: "row" }}
          gap="10"
        >
          <Box w="100%">
            <Image
              src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
              alt="blogImg"
            />
          </Box>
          <Box w="100%">
            <Text
              fontWeight="bold"
              fontSize={{ base: "20px", md: "30px" }}
              color="#333d4a"
            >
              Turning a digital brand into a real world experience
            </Text>
            <Text mt="4" color="grey">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </Text>
            <Text
              mt="4"
              cursor="pointer"
              fontStyle="italic"
              color="grey"
              textDecoration="underline"
            >
              Read More
            </Text>
            <Flex
              mt="6"
              gap="5"
              fontStyle="italic"
              fontSize="14px"
              fontWeight="bold"
              color="grey"
            >
              <Box>
                <i className="fa-solid fa-pen"></i> Jamie Jonson
              </Box>
              <Box>12/03/2023</Box>
              <Box>
                6 <i className="fa-solid fa-comment"></i>
              </Box>
            </Flex>
          </Box>
        </Flex>

        {/* 3rd */}

        <Flex
          w="100%"
          mt="10"
          flexDirection={{ base: "column", md: "row" }}
          gap="10"
        >
          <Box w="100%">
            <Image
              src="https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="blogImg"
            />
          </Box>

          <Box w="100%">
            <Text
              fontWeight="bold"
              fontSize={{ base: "20px", md: "30px" }}
              color="#333d4a"
            >
              Build a website in minutes with Adobe Templates
            </Text>
            <Text mt="4" color="grey">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </Text>
            <Text
              mt="4"
              cursor="pointer"
              fontStyle="italic"
              color="grey"
              textDecoration="underline"
            >
              Read More
            </Text>
            <Flex
              mt="6"
              gap="5"
              fontStyle="italic"
              fontSize="14px"
              fontWeight="bold"
              color="grey"
            >
              <Box>
                <i className="fa-solid fa-pen"></i> Tom Clinton
              </Box>
              <Box>12/03/2023</Box>
              <Box>
                8 <i className="fa-solid fa-comment"></i>
              </Box>
            </Flex>
          </Box>
        </Flex>

        {/* 4th */}
        <Flex
          w="100%"
          mt="10"
          flexDirection={{ base: "column", md: "row" }}
          gap="10"
        >
          <Box w="100%">
            <Image
              src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="blogImg"
            />
          </Box>
          <Box w="100%">
            <Text
              fontWeight="bold"
              fontSize={{ base: "20px", md: "30px" }}
              color="#333d4a"
            >
              A Loving Heart is the Truest Wisdom
            </Text>
            <Text mt="4" color="grey">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </Text>
            <Text
              mt="4"
              cursor="pointer"
              fontStyle="italic"
              color="grey"
              textDecoration="underline"
            >
              Read More
            </Text>
            <Flex
              mt="6"
              gap="5"
              fontStyle="italic"
              fontSize="14px"
              fontWeight="bold"
              color="grey"
            >
              <Box>
                <i className="fa-solid fa-pen"></i> Rayn Reynolds
              </Box>
              <Box>12/07/2023</Box>
              <Box>
                3 <i className="fa-solid fa-comment"></i>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Link to="/blogs">
        <Text
          textAlign="center"
          color="#6b34fb"
          fontWeight="bold"
          fontSize={{ base: "18px", md: "20px" }}
          mt={{ base: "10", md: "20" }}
        >
          More Blogs <i className="fa-solid fa-angle-right"></i>
        </Text>
      </Link>

      <Box bg="gray.100" w="100%" py="20" mt="10" textAlign="center">
        <Text
          fontWeight="bold"
          fontSize={{ base: "20px", md: "30px" }}
          color="#333d4a"
        >
          Subscribe to our Newsletter
        </Text>

        <Flex
          alignItems="center"
          gap="0"
          w={{ base: "90%", md: "35%" }}
          m="auto"
          mt="5"
        >
          <Input
            w="90%"
            placeholder="Enter email address"
            border="1px solid #333d4a"
            _hover={{ border: "1px solid #333d4a" }}
            borderRadius="none"
            bg="white"
          />
          <Button
            bg="#141b25"
            _hover={{ bg: "#141b25" }}
            px="8"
            fontWeight="normal"
            color="#ffffffcc"
            borderRadius="none"
            gap="2"
          >
            Send <i className="fa-solid fa-paper-plane"></i>
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
