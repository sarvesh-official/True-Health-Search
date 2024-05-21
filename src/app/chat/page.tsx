"use client";

import {
  Flex,
  Heading,
  Spacer,
  VStack,
  Box,
  Text,
  SimpleGrid,
  Button,
  IconButton,
} from "@chakra-ui/react";
import Sidebar from "../../components/sections/aichat/SideBar.jsx";
import ChatInterface from "../../components/sections/aichat/ChatInterFace.jsx";

function AiChat() {
  return (
    <Flex minHeight="100vh">
      <Sidebar />
      <Flex flexDirection="column" w="100%">
        <VStack pt={"20vh"}>
          <Heading pb={2} size={"2xl"}>
            Welcome to{" "}
            <Box as="span" color={"primary"}>
              TrueHealthSearch
            </Box>
          </Heading>

          <Text fontSize={"smaller"} fontWeight={500} color={"gray"}>
            GET YOUR MEDICAL CODING DOUBTS ANSWERED
          </Text>

          <SimpleGrid columns={2} gap={4} mt={"10vh"} p={3}>
            <Button variant="outline" h={"60px"}>
              Which ICD-10 code is used for uncomplicated hypertension?
            </Button>
            <Button variant="outline" h={"60px"}>
              Which ICD-10 code is used for uncomplicated hypertension?
            </Button>
            <Button variant="outline" h={"60px"}>
              Which ICD-10 code is used for uncomplicated hypertension?
            </Button>
            <Button variant="outline" h={"60px"}>
              Which ICD-10 code is used for uncomplicated hypertension?
            </Button>
          </SimpleGrid>
        </VStack>
        <Spacer />
        <ChatInterface />
      </Flex>
    </Flex>
  );
}

export default AiChat;
