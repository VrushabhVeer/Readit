import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogging from "../assets/writing-pana.png";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://nice-pink-eagle-robe.cyclic.app/blogs"
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
        w={{ base: "90%", md: "80%" }}
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
        w={{ base: "90%", md: "80%" }}
        m="auto"
        mt={{ base: "10", md: "20" }}
      >
        <Text
          color="#333d4a"
          fontSize={{ base: "35px", md: "45px" }}
          fontWeight="bold"
        >
          All Blogs
        </Text>

        {data.map(
          (item, index) =>
            index < 5 && (
              <Flex
                key={index}
                w="100%"
                mt="8"
                flexDirection={{ base: "column", md: "row" }}
                gap={{ base: "3", md: "10" }}
              >
                <Box w="100%">
                  <Image src={item.image} alt="blogImg" loading="lazy" />
                </Box>

                <Box w="100%">
                  <Text
                    fontWeight="bold"
                    fontSize={{ base: "20px", md: "30px" }}
                    color="#333d4a"
                  >
                    {item.title}
                  </Text>
                  <Text mt="4" color="grey">
                    {item.intro}
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
                    mt="4"
                    gap="5"
                    fontStyle="italic"
                    fontSize="14px"
                    fontWeight="bold"
                    color="grey"
                  >
                    <Box>
                      <i className="fa-solid fa-user"></i> John Rolex
                    </Box>
                    <Box>{item.date}</Box>
                    <Box>
                      <i className="fa-solid fa-comment"></i>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            ))}
      </Box>

      <Link to="/blogs">
        <Text
          textAlign="center"
          color="#5222d0"
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
