import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const Myblogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const toast = useToast();

  useEffect(() => {
    setIsLoading(true);

    let userId = localStorage.getItem("userId");
    axios
      .get(
        `https://sleepy-calf-panama-hat.cyclic.app/blogs/myblogs/${userId}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => res.data)
      .then((res) => {
        setBlogs(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  const getData = () => {
    let userId = localStorage.getItem("userId");
    axios
      .get(
        `https://sleepy-calf-panama-hat.cyclic.app/blogs/myblogs/${userId}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((getData) => {
        setBlogs(getData.data);
      });
  };
  console.log(getData);

  const onDelete = (_id) => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .delete(`https://sleepy-calf-panama-hat.cyclic.app/blogs/delete/${_id}`, {
        headers,
      })
      .then(() => {
        getData();
        toast({
          title: "Deleted",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setData = (item) => {
    let { image, title, intro, description, date, _id } = item;
    localStorage.setItem("image", image);
    localStorage.setItem("title", title);
    localStorage.setItem("intro", intro);
    localStorage.setItem("description", description);
    localStorage.setItem("date", date);
    localStorage.setItem("id", _id);
  };

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
                <Image
                  h="50vh"
                  w="100%"
                  objectFit="cover"
                  src={item.image}
                  alt="blogImg"
                  loading="lazy"
                />
              </Box>

              <Box w="100%">
                <Text color="#71717a" fontSize="14px">
                  {item.date}
                </Text>
                <Text
                  fontWeight="bold"
                  fontSize={{ base: "20px", md: "30px" }}
                  color="#333d4a"
                >
                  {item.title}
                </Text>
                <Text mt="4" color="#71717a">
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

                <Flex mt="5" gap="7" color="#71717a" alignItems="center">
                  <Button class="button-24" role="Button" onClick={onOpen}>
                    Delete
                  </Button>

                  <Link to="/update">
                    <Button
                      class="button-25"
                      role="Button"
                      onClick={() => setData(item)}
                    >
                      Edit
                    </Button>
                  </Link>
                </Flex>

                <AlertDialog
                  isOpen={isOpen}
                  leastDestructiveRef={cancelRef}
                  onClose={onClose}
                  isCentered
                >
                  <AlertDialogOverlay>
                    <AlertDialogContent>
                      <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Confirm Delete
                      </AlertDialogHeader>
                      <AlertDialogCloseButton />

                      <AlertDialogBody>
                        Are you sure? You can't undo this action afterwards.
                      </AlertDialogBody>

                      <AlertDialogFooter gap="5">
                        <Button
                          ref={cancelRef}
                          onClick={onClose}
                          fontWeight="normal"
                          fontSize="14px"
                        >
                          Cancel
                        </Button>
                        <Button
                          class="button-24"
                          role="Button"
                          onClick={() => onDelete(item._id)}
                          ml={3}
                        >
                          Delete
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialogOverlay>
                </AlertDialog>
              </Box>
            </Flex>
          ))}
        </Box>
      )}
    </>
  );
};

export default Myblogs;
