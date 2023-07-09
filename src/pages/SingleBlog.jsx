import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`https://sleepy-calf-panama-hat.cyclic.app/blogs/${params.blogId}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [params]);

  console.log(params);

  return (
    <Box
      w={{ base: "90%", md: "50%" }}
      m="auto"
      mt={{ base: "8", md: "16" }}
      mb="20"
    >
      <VStack w="100%">
        <Text
          fontWeight="bold"
          fontSize={{ base: "20px", md: "30px" }}
          color="#333d4a"
          textAlign="left"
        >
          {data.title}
        </Text>

        <Box mt="3">
          <Image w="100%" src={data.image} alt="blogImg" />
        </Box>

        <Box mt="4">
          <Text color="#333d4a" className="description">
            {data.description}
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
              <i className="fa-solid fa-user"></i> {data.userName}
            </Box>
            <Box>{data.date}</Box>
            <Box>
              <i className="fa-solid fa-pen"></i> Edit
            </Box>
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
};

export default SingleBlog;
