import {
  Box,
  Text,
  Input,
  Button,
  Textarea,
  useToast,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [intro, setIntro] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const toast = useToast();
  let navigate = useNavigate();
  let id = localStorage.getItem("id");

  useEffect(() => {
    setTitle(localStorage.getItem("title"));
    setImage(localStorage.getItem("image"));
    setIntro(localStorage.getItem("intro"));
    setDescription(localStorage.getItem("description"));
    setDate(localStorage.getItem("date"));
  }, []);

  const handleSubmit = () => {
    const payload = {
      title,
      image,
      intro,
      description,
      date,
      userName: localStorage.getItem("userName"),
    };
    console.log(payload);

    const url = `https://readit-db-production.up.railway.app/blogs/edit/${id}`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    axios
      .patch(url, payload, { headers })
      .then((response) => {
        console.log(response.data);

        toast({
          title: "Updated",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/myblogs");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Box
      w={{ base: "90%", md: "40%" }}
      m="auto"
      mt={{ base: "8", md: "16" }}
      mb="20"
    >
      <Text
        textAlign="center"
        color="#333d4a"
        fontWeight="bold"
        fontSize={{ base: "30px", md: "40px" }}
      >
        Update blog
      </Text>

      <Box mt="8" w="100%">
        <Box>
          <Input
            value={title}
            border="1px solid #cecece"
            _hover={{ border: "1px solid #cecece" }}
            placeholder="add title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Box>
        <Box mt="5">
          <Input
            value={image}
            border="1px solid #cecece"
            _hover={{ border: "1px solid #cecece" }}
            placeholder="add image"
            type="text"
            onChange={(e) => setImage(e.target.value)}
          />
        </Box>
        <Box mt="5">
          <Textarea
            value={intro}
            border="1px solid #cecece"
            _hover={{ border: "1px solid #cecece" }}
            placeholder="blog intro"
            maxLength="230"
            type="text"
            onChange={(e) => setIntro(e.target.value)}
          />
        </Box>
        <Box mt="5">
          <Textarea
            value={description}
            border="1px solid #cecece"
            _hover={{ border: "1px solid #cecece" }}
            placeholder="your blog"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Box>
        <Box mt="5">
          <Input
            value={date}
            border="1px solid #cecece"
            _hover={{ border: "1px solid #cecece" }}
            placeholder="publish date"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </Box>

        {title === "" || image === "" || intro === "" || description === "" ? (
          <Alert status="warning" fontSize="15px" borderRadius="5" p="2" mt="5">
            <AlertIcon />
            Please fill all fields.
          </Alert>
        ) : (
          ""
        )}

        <Button
          className="button-86"
          role="button"
          color="white"
          mt="8"
          fontWeight="normal"
          onClick={handleSubmit}
          isDisabled={
            title === "" || image === "" || intro === "" || description === ""
          }
        >
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default Update;
