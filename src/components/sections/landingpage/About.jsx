"use client";
import {
  Box,
  Heading,
  Text,
  VStack,
  Img,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

function About() {
  const text = useColorModeValue("#014DB0", "#fff");

  return (
    <Box>
      <Flex
        direction={{ base: "column", lg: "row" }}
        justifyContent={{ base: "center", md: "center" }}
        alignItems={{ base: "center", md: "center" }}
        p={{ base: 5, md: 10 }}
        m={{ base: 3, md: 5 }}
        gap={{ base: "30px", lg: "" }}
      >
        <VStack
          justify={"center"}
          w={{ lg: "50%" }}
          alignItems={{ base: "center", lg: "flex-start" }}
          gap={{ base: "20px", lg: "10px" }}
        >
          <Heading
            size={{ base: "2xl", md: "4xl" }}
            mb={4}
            color={"primary"}
            textAlign={{ base: "center", lg: "left" }}
          >
            About Us
          </Heading>
          <Text
            mb={4}
            fontSize={{ base: "md", md: "xl" }}
            w={{ base: "100%", md: "80%" }}
            textAlign="justify"
          >
            At{" "}
            <Box as="span" color={"primary"}>
              TrueHealthSearch
            </Box>
            , we understand the complexities and challenges faced by healthcare
            professionals in {`today's`} fast-paced, ever-evolving landscape.
            Our mission is to empower you with a comprehensive resource hub that
            combines trusted, up-to-date information with groundbreaking
            AI-powered tools. We are dedicated to enhancing your efficiency,
            instilling confidence, and boosting productivity, enabling you to
            deliver exceptional care and drive positive change in the healthcare
            community.
          </Text>
        </VStack>
        <Img
          src="about.png"
          alt="About Image"
          boxSize={{ base: "100%", md: "auto" }}
          mb={{ base: 4, md: 0 }}
        />
      </Flex>
    </Box>
  );
}

export default About;
