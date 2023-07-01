import {
    Box,
    Text,
    Input,
    Button,
    InputRightElement,
    InputGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

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

            <Box mt="8">
                <Box>
                    <Input
                        borderRadius="none"
                        border="1px solid #cecece"
                        _hover={{ border: "1px solid #cecece" }}
                        placeholder="email address"
                        type="email"
                        required
                    />
                </Box>
                <Box mt="5">
                    <InputGroup>
                        <Input
                            borderRadius="none"
                            border="1px solid #cecece"
                            _hover={{ border: "1px solid #cecece" }}
                            placeholder="password"
                            type={showPassword ? "text" : "password"}
                            required
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

                <Button
                    w="100%"
                    bg="none"
                    mt="10"
                    _hover={{ bg: "none" }}
                    borderRadius="none"
                    className="button-52"
                    role="button"
                    fontWeight="medium"
                    color="white"
                >
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
