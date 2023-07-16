import {
  Box,
  Text,
  Input,
  Button,
  InputRightElement,
  InputGroup,
  useToast,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = () => {
    const payload = {
      email,
      password,
    };
    console.log(payload);

    axios
      .post("https://sleepy-calf-panama-hat.cyclic.app/user/login", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userName", res.data.userName);
        localStorage.setItem("userId", res.data.userId);

        toast({
          title: "Login Succesful",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        const { from } = location.state || { from: { pathname: "/" } };
        navigate(from);
      })
      .catch((error) => {
        console.error(error);

        toast({
          render: () => (
            <Box
              color="white"
              p={3}
              bg="#ed1b41"
              borderRadius="8"
              fontWeight="normal"
              textAlign="center"
            >
              <i className="fa-solid fa-circle-exclamation"></i> Failed to
              login, Please try again.
            </Box>
          ),
        });
      });
  };

  const token = localStorage.getItem("token");

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
        Login
      </Text>
      <Text textAlign="center" color="#333d4a">
        Login to your Readit account.
      </Text>

      {token ? (
        <Alert status="warning" fontSize="15px" borderRadius="5" p="2" mt="5">
          <AlertIcon />
          you are already login!
        </Alert>
      ) : (
        ""
      )}

      <Box mt="8">
        <Box>
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

        <Button class="button-27" role="button" onClick={handleLogin}>
          Login
        </Button>

        <Text mt="8" textAlign="center">
          New user, please{" "}
          <Link to="/signup">
            <span className="signup">Signup</span>
          </Link>{" "}
          first.
        </Text>
      </Box>
    </Box>
  );
};

export default Login;
