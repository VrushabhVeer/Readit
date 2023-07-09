import { Box, Flex, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllBlogs = () => {
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
    <Box
      w={{ base: "90%", md: "80%" }}
      m="auto"
      mt={{ base: "8", md: "16" }}
      mb="20"
    >
      <Text
        color="#333d4a"
        fontSize={{ base: "35px", md: "45px" }}
        fontWeight="bold"
      >
        All Blogs
      </Text>

      <SimpleGrid mt="8" columns={[1, 1, 1, 2, 3]} spacing="40px">
        {data.map((item, index) => (
          <VStack key={index}>
            <Box>
              <Image src={item.image} alt="blogImg" loading="lazy" />
            </Box>
            <Box>
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

              <Link to={`/blogs/${item._id}`}>
                <Text
                  mt="4"
                  cursor="pointer"
                  fontStyle="italic"
                  color="grey"
                  textDecoration="underline"
                >
                  Read More
                </Text>
              </Link>

              <Flex
                mt="4"
                gap="5"
                fontStyle="italic"
                fontSize="14px"
                fontWeight="bold"
                color="grey"
              >
                <Box>
                  <i className="fa-solid fa-user"></i> {item.userName}
                </Box>
                <Box>{item.date}</Box>
                <Box>
                  <i className="fa-solid fa-comment"></i>
                </Box>
              </Flex>
            </Box>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default AllBlogs;
