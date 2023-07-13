import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogging from "../assets/writing.png";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sleepy-calf-panama-hat.cyclic.app/blogs"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Flex
        w={{ base: "90%", md: "85%" }}
        m="auto"
        mt={{ base: "8", md: "0" }}
        alignItems="center"
        gap={{ base: "0", md: "10" }}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
      >
        <Box w="100%">
          <Text
            color="#333d4a"
            fontSize={{ base: "40px", md: "60px" }}
            fontWeight="bold"
          >
            Readit. <span className="it">Blogs.</span>
          </Text>

          <Text color="#333d4a">
            Create a beautiful blog that fits your style. Whather sharing your
            expertise, breaking news, or whatever’s on your mind, you’re in good
            company on Blogger. Sign up to published your passions here.
          </Text>

          <Link to="/create">
            <Button
              className="button-86"
              role="button"
              color="white"
              mt="10"
              fontWeight="normal"
            >
              Create Your Blog
            </Button>
          </Link>
        </Box>

        <Box w="100%">
          <Image w="100%" src={blogging} alt="Blogging" loading="lazy" />
        </Box>
      </Flex>

      <Box
        w={{ base: "90%", md: "85%" }}
        m="auto"
        mt={{ base: "10", md: "20" }}
      >
        <Text
          color="#333d4a"
          fontSize={{ base: "35px", md: "45px" }}
          fontWeight="bold"
        >
          Read latest
        </Text>
        <Text color="#71717a">
          Read our latest blog collections, which are written by our valuable users.
        </Text>
        <Link to="/blogs">
          <Flex alignItems="center" gap="2" mt="5">
            <Text fontSize="18px">See all articles</Text>
            <Text fontSize="15px" mt="1">
              <i className="fa-solid fa-arrow-right"></i>
            </Text>
          </Flex>
        </Link>

        <SimpleGrid mt="8" columns={[1, 1, 1, 2, 3]} spacing="40px">
          {data.reverse().map(
            (item, index) =>
              index < 3 && (
                <Box key={index}>
                  <Box>
                    <Image
                      h="30vh"
                      w="100%"
                      objectFit="cover"
                      src={item.image}
                      alt="blogImg"
                      loading="lazy"
                    />
                  </Box>

                  <Box mt="3">
                    <Text
                      fontWeight="bold"
                      lineHeight="34px"
                      fontSize={{ base: "20px", md: "25px" }}
                      color="#333d4a"
                    >
                      {item.title}
                    </Text>
                    <Text
                      mt="3"
                      color="#71717a"
                      w="100%"
                      whiteSpace="nowrap"
                      overflow="hidden"
                      textOverflow="ellipsis"
                    >
                      {item.intro}
                    </Text>

                    <Link to={`/blogs/${item._id}`}>
                      <Text
                        fontSize="16px"
                        mt="1"
                        textDecoration="underline"
                        color="#333d4a"
                      >
                        Read more
                      </Text>
                    </Link>
                  </Box>
                </Box>
              )
          )}
        </SimpleGrid>
      </Box>

      <Link to="/blogs">
        <Flex alignItems="center" gap="2" mt="20" justifyContent="center">
          <Text fontSize="18px" color="#333d4a">
            See all articles
          </Text>
          <Text fontSize="15px" mt="1">
            <i className="fa-solid fa-arrow-right"></i>
          </Text>
        </Flex>
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
            borderRightRadius="none"
            bg="white"
          />
          <Button
            bg="#141b25"
            _hover={{ bg: "#141b25" }}
            px="8"
            fontWeight="normal"
            color="#ffffffcc"
            borderLeftRadius="none"
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
