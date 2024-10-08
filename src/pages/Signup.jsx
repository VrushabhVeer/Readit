import {
  Box,
  Text,
  Input,
  Button,
  InputRightElement,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleSignup = async () => {
    const data = {
      name,
      email,
      password,
    };

    try {
      const response = await axios.post(
        "https://readit-db-production.up.railway.app/user/signup",
        data
      );

      if (response.data.msg === "Email already exists") {
        toast({
          title: response.data.msg,
          description: "please try different email",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: response.data.msg,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Signup failed!",
        description: "please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
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
        Signup
      </Text>
      <Text textAlign="center" color="#333d4a">Share your thoughts and experiences.</Text>

      <Box mt="8">
        <Box>
          <Input
            border="1px solid #cecece"
            _hover={{ border: "1px solid #cecece" }}
            placeholder="full name"
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </Box>
        <Box mt="5">
          <Input
            border="1px solid #cecece"
            _hover={{ border: "1px solid #cecece" }}
            placeholder="email address"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box mt="5">
          <InputGroup>
            <Input
              border="1px solid #cecece"
              _hover={{ border: "1px solid #cecece" }}
              placeholder="password"
              type={showPassword ? "text" : "password"}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement h={"full"}>
              <Button
                variant={"ghost"}
                _hover={{ variant: "ghost" }}
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>

        <Button className="button-27" role="button" onClick={handleSignup}>
          Signup
        </Button>

        <Text mt="8" textAlign="center">
          If already user, please{" "}
          <Link to="/login">
            <span className="signup">Login.</span>
          </Link>{" "}
        </Text>
      </Box>
    </Box>
  );
};

export default Signup;
