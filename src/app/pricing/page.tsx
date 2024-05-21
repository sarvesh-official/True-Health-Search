"use client";
import {
  Box,
  Button,
  Heading,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import NavBar from "@/components/NavBar";
import Link from "next/link";

const plans = [
  {
    index: 0,
    name: "Starter Plan",
    price: " US $1 /Week",
    url: "https://buy.stripe.com/cN2161gLG1v43vi3cc",
    features: [
      "Fully responsive on all screens",

      "Design + Development",

      "Private communication channel",
      "6-9 days turnaround time",
    ],
    //   style:
    //     " rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Standalone components tailored to your needs and easily integrated. Perfect for website elements or sections.",
    button: "Get Started",
    topcolor: "yellow",
  },
  {
    index: 1,
    name: "Monthly plan",
    price: "US $80 /Month",
    url: "https://buy.stripe.com/14k9CxbrmddM0j6001",
    features: [
      "Fully responsive on all screens",
      "React / Next.js / Tailwind CSS code",
      "Design + Development",
      "24-hour support response time",
      "Private communication channel",
      "3-5 days turnaround time",
    ],
    //   style:
    //     " rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Best for early-stage startups, businesses, and freelancers that need a marketing side to showcase their work and vision.",
    button: "Get started",
    topcolor: "blue",
  },
  {
    index: 2,
    name: "Annual Plan ",
    feature: "Custom",
    price: "US $320 /Annual",
    url: "https://buy.stripe.com/bIY4id3YUc9Ife0146",
    features: [
      "Fully responsive on all screens",
      "React / Next.js / Tailwind CSS code",
      "Design + Development",
      "Unlimited Revisions",
      "1-3 days turnaround time",
    ],
    //   style:
    //     " h-full rounded-3xl py-10 flex flex-col  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50  ",
    description:
      "Best for small businesses and startups that need a performant website that looks great and converts visitors to customers.",
    button: "Get started",
    topcolor: "purple",
  },
];

const Pricing = () => {
  return (
    <div>
      <NavBar />
      <Box w="full" overflow="hidden" mt={8}>
        <VStack spacing={10} align="center">
          <Heading as="h1" size="2xl" color="gray.100">
            Streamline your teamwork. Start free.
          </Heading>
          <Text fontSize="xl">
            Choose the perfect plan for your business needs
          </Text>

          <Box
            display="grid"
            gridTemplateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            gap={6}
          >
            {plans.map((plan, index) => (
              <Box
                key={plan.name}
                bg="white"
                color="black"
                borderWidth="1px"
                borderRadius="md"
                p={3}
                width="30vw"
                borderTop="4px"
                borderTopColor={plan.topcolor}
              >
                <VStack align="start" spacing={6}>
                  <Heading as="h2" size="lg">
                    {plan.name}
                  </Heading>
                  <Text>Best for personal use</Text>
                  <Text fontSize="2xl">{plan.price}</Text>
                  <Text>{plan.description}</Text>

                  <List spacing={2}>
                    {plan.features.map((feature) => (
                      <ListItem
                        key={feature}
                        display="flex"
                        alignItems="center"
                      >
                        <CheckCircleIcon
                          color={
                            plan.feature === "Contact Us"
                              ? "blue.400"
                              : "green.500"
                          }
                        />
                        <Text ml={2}>{feature}</Text>
                      </ListItem>
                    ))}
                  </List>

                  <Link href={plan.url}>
                    <Button
                      colorScheme="none"
                      backgroundColor={index == 2 ? "white" : "blue"}
                      w="full"
                      border="2px"
                      borderColor={index == 2 ? "blue" : "white"}
                      color={index == 2 ? "blue" : "white"}
                    >
                      {plan.button}
                    </Button>
                  </Link>
                </VStack>
              </Box>
            ))}
          </Box>
        </VStack>
      </Box>
    </div>
  );
};

export default Pricing;
