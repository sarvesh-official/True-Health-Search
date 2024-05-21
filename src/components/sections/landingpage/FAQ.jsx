import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  VStack,
  Heading,
  Flex,
} from "@chakra-ui/react";
import React from "react";

function FAQSection() {
  const faqs = [
    {
      question: "Is my privacy protected when using TrueHealthSearch.com?",
      answer:
        "Absolutely. We prioritize the privacy and security of our users. Any personal information shared on our platform is strictly confidential and will never be used for AI training purposes or shared with third parties without your explicit consent.",
    },
    {
      question:
        "Will TrueHealthSearch.com replace human healthcare workers like medical coders?",
      answer:
        "No, our platform is designed to complement and empower healthcare professionals, not replace them. We aim to provide tools and resources that enhance efficiency and productivity, enabling you to focus on delivering exceptional care to patients.",
    },
    {
      question:
        "How accurate is the information provided on TrueHealthSearch.com?",
      answer:
        "We are committed to delivering reliable, up-to-date information sourced from trusted, authoritative sources. Our content is meticulously reviewed and validated by healthcare experts to ensure accuracy and relevance.",
    },
  ];

  return (
    <Box pb={"50px"}>
      <VStack
        textAlign={"center"}
        p={{ base: 5, md: 10 }}
        m={{ base: 3, md: 5 }}
        alignItems={"center"}
        justifyContent={"center"}
        gap={{ base: "30px", lg: "25px" }}
      >
        <Heading>Frequently Asked Questions</Heading>
        <Text mb={4} w={"80%"}>
          Got questions? Find quick answers to common queries in our FAQ
          section. Streamline your experience with hassle-free solutions
        </Text>
      </VStack>

      <Flex
        justifyContent={"space-evenly"}
        alignItems={"center"}
        p={5}
        px={{ base: "", md: 20 }}
        flexDirection={{ base: "column", md: "row" }}
        gap={30}
      >
        <VStack align="center" spacing={4} w="100%">
          <Accordion allowMultiple>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} spacing={4}>
                {" "}
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" ml={2} mr={3}>
                      {" "}
                      <Text fontWeight="bold" fontSize="xl">
                        {faq.question}
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  <Text fontSize="lg">{faq.answer}</Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </VStack>
      </Flex>
    </Box>
  );
}

export default FAQSection;
