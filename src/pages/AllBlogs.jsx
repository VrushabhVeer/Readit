import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const AllBlogs = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://readit-db-production.up.railway.app/blogs"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Box
          w={{ base: "90%", md: "85%" }}
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

          <SimpleGrid
            mt="8"
            columns={[1, 1, 1, 2, 3]}
            columnGap="40px"
            rowGap="50px"
          >
            {data.map((item, index) => (
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
                    fontSize={{ base: "20px", md: "25px" }}
                    color="#333d4a"
                    lineHeight="34px"
                  >
                    {item.title}
                  </Text>
                  <Text mt="3" color="#71717a" fontSize="15px">
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

                  <Flex mt="3" gap="5" color="#71717a" alignItems="center">
                    <Text className="userName" fontSize="15px">
                      • {item.userName}
                    </Text>

                    <Text fontSize="14px">• {item.date}</Text>
                  </Flex>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      )}
    </>
  );
};

export default AllBlogs;
