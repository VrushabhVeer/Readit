import { Box, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Myblogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("https://sleepy-calf-panama-hat.cyclic.app/blogs/myblogs", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => res.data)
      .then((res) => {
        setBlogs(res);
      })
      .catch((err)=>{
        console.log(err);
      })
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
        My Blogs
      </Text>

      {blogs.map((item, index) => (
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
                <i className="fa-solid fa-user"></i> {item.userName}
              </Box>
              <Box>{item.date}</Box>
              <Box>
                <i className="fa-solid fa-pen"></i> Edit
              </Box>
            </Flex>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

export default Myblogs;
