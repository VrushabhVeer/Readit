import { Box, Text, Input, Button, Textarea } from "@chakra-ui/react";
import React from "react";

const CreateBlogs = () => {
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
                Create blog
            </Text>

            <Box mt="8">
                <Box>
                    <Input
                        borderRadius="none"
                        border="1px solid #cecece"
                        _hover={{ border: "1px solid #cecece" }}
                        placeholder="add title"
                        type="text"
                    />
                </Box>
                <Box mt="5">
                    <Input
                        borderRadius="none"
                        border="1px solid #cecece"
                        _hover={{ border: "1px solid #cecece" }}
                        placeholder="add image"
                        type="text"
                    />
                </Box>
                <Box mt="5">
                    <Textarea
                        borderRadius="none"
                        border="1px solid #cecece"
                        _hover={{ border: "1px solid #cecece" }}
                        placeholder="blog description"
                        type="text"
                    />
                </Box>
                <Box mt="5">
                    <Textarea
                        borderRadius="none"
                        border="1px solid #cecece"
                        _hover={{ border: "1px solid #cecece" }}
                        placeholder="your blog"
                        type="text"
                    />
                </Box>
                <Box mt="5">
                    <Input
                        borderRadius="none"
                        border="1px solid #cecece"
                        _hover={{ border: "1px solid #cecece" }}
                        placeholder="publish date"
                        type="date"
                    />
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
                    Publish
                </Button>
            </Box>
        </Box>
    );
};

export default CreateBlogs;
