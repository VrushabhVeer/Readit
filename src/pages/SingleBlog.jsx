import { Box, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import user from "../assets/profile.png";
import calendar from "../assets/calendar.png";

const SingleBlog = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const [color, setColor] = useState("#333d4a");

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

  const liked = () => {
    const newColor = color === "#333d4a" ? "#f64c64" : "#333d4a";
    setColor(newColor);
  };

  return (
    <Box
      w={{ base: "90%", md: "50%" }}
      m="auto"
      mt={{ base: "8", md: "16" }}
      mb="20"
    >
      <Box w="100%">
        <Text
          fontWeight="bold"
          fontSize={{ base: "20px", md: "30px" }}
          color="#333d4a"
          textAlign="left"
          lineHeight="35px"
        >
          {data.title}
        </Text>
        <Flex mt="4" gap="5" color="#71717a" alignItems="center">
          <Flex alignItems="center" gap="2">
            <Image w="7" src={user} alt="user" loading="lazy" />
            <Text className="userName">{data.userName}</Text>
          </Flex>
          <Flex alignItems="center" gap="2">
            <Image w="6" src={calendar} alt="calendar" loading="lazy" />
            <Text fontSize="14px">{data.date}</Text>
          </Flex>
        </Flex>

        <Box mt="5">
          <Image w="100%" src={data.image} alt="blogImg" loading="lazy" />
        </Box>

        <Box mt="4">
          <Text color="#333d4a" className="description">
            {data.description}
          </Text>
        </Box>

        <Flex
          alignItems="center"
          gap="6"
          mt="8"
          fontSize="17px"
          color="#333d4a"
        >
          <i
            className="fa-solid fa-heart"
            onClick={liked}
            style={{ color: color }}
          ></i>
          <i className="fa-solid fa-comment"></i>
          <i className="fa-sharp fa-solid fa-share-nodes"></i>
        </Flex>
      </Box>
    </Box>
  );
};

export default SingleBlog;
