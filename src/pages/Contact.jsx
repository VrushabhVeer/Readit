import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Textarea,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import mail from "../assets/mailbox-pana.png";

const Contact = () => {
  const toast = useToast();

  const handleSubmit = () => {
    toast({
      title: "Your response send",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <>
      <Text
        textAlign="center"
        color="#333d4a"
        fontWeight="bold"
        fontSize={{ base: "30px", md: "40px" }}
        mt={{ base: "5", md: "10" }}
      >
        Contact Us
      </Text>
      <Flex
        w={{ base: "90%", md: "80%" }}
        m="auto"
        mt="5"
        mb="12"
        alignItems="center"
        gap={{ base: "0", md: "20" }}
        flexDirection={{ base: "column-reverse", md: "row" }}
      >
        <Box w="100%">
          <Image src={mail} alt="mail" loading="lazy" />
        </Box>
        <Box w="100%">
          <Box>
            <Input
              border="1px solid #cecece"
              _hover={{ border: "1px solid #cecece" }}
              placeholder="Your name"
              type="text"
            />
          </Box>
          <Box mt="5">
            <Input
              border="1px solid #cecece"
              _hover={{ border: "1px solid #cecece" }}
              placeholder="Your email"
              type="text"
            />
          </Box>
          <Box mt="5">
            <Textarea
              border="1px solid #cecece"
              _hover={{ border: "1px solid #cecece" }}
              placeholder="Your message"
              type="text"
            />
          </Box>
          <Button
            className="button-86"
            role="button"
            color="white"
            mt="10"
            onClick={handleSubmit}
            fontWeight="normal"
            gap="3"
          >
            Send <i className="fa-solid fa-paper-plane"></i>
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Contact;
