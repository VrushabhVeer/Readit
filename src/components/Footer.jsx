import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="#141b25" color="gray.300">
      <Container as={Stack} maxW={"7xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"} fontSize={"15px"}>
            <Text fontWeight="bold" letterSpacing="0.5px">
              Company
            </Text>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Contact Us</Link>
          </Stack>

          <Stack align={"flex-start"} fontSize={"15px"}>
            <Text fontWeight="bold" letterSpacing="0.5px">
              Support
            </Text>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Safety Center</Link>
            <Link href={"#"}>Community Guidelines</Link>
          </Stack>

          <Stack align={"flex-start"} fontSize={"15px"}>
            <Text fontWeight="bold" letterSpacing="0.5px">
              Address
            </Text>
            <Text>
              203 lake St. Mountain View, San Francisco, California, USA
            </Text>
            <Text>+12 392 3929 210</Text>
            <Text>info@yourdomain.com</Text>
          </Stack>

          <Stack align={"flex-start"}>
            <Text fontSize={"15px"} fontWeight="bold" letterSpacing="0.5px">
              Follow us
            </Text>

            <Stack
              fontSize={"19px"}
              direction={"row"}
              mt="1"
              spacing={4}
              color="gray.300"
            >
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-youtube"></i>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box p="3" borderTop="1px solid #ffffffcc" textAlign="center">
        <Text fontSize="14px">© 2023 made by Vrushabh Veer</Text>
      </Box>
    </Box>
  );
}
