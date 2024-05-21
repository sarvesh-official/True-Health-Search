"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  useColorModeValue,
  SimpleGrid,
  IconButton,
  useColorMode,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Spacer,
} from "@chakra-ui/react";
import "@fontsource/ibm-plex-sans/400.css";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);

  const background = useColorModeValue("#fff", "#1A202C");

  const handleDrawerToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Box paddingY={5}>
        <Container maxW={1400} fontFamily={"nav"}>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Box
              minWidth={"150px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <h2>True Health Search</h2>
            </Box>

            <Flex
              gap={10}
              placeItems={"center"}
              display={{ base: "none", md: "flex" }}
            >
              <Box>
                <Link
                  display={"flex"}
                  flexDir={"column"}
                  href="/"
                  justifyItems={"center"}
                  alignItems={"center"}
                  _hover={{
                    color: "primary",
                    fontWeight: 600,
                    "& .link-circle": { display: "block" },
                  }}
                >
                  Home
                  <div className="link-circle" />
                </Link>
              </Box>
              <Box>
                <Link
                  display={"flex"}
                  flexDir={"column"}
                  justifyItems={"center"}
                  alignItems={"center"}
                  _hover={{
                    fontWeight: 600,
                    color: "primary",
                    "& .link-circle": { display: "block" },
                  }}
                >
                  Services
                  <div className="link-circle" />
                </Link>
              </Box>
              <Box>
                <Link
                  display={"flex"}
                  flexDir={"column"}
                  justifyItems={"center"}
                  alignItems={"center"}
                  _hover={{
                    fontWeight: 600,
                    color: "primary",
                    "& .link-circle": { display: "block" },
                  }}
                >
                  About
                  <div className="link-circle" />
                </Link>{" "}
              </Box>
              <Box>
                <Link
                  display={"flex"}
                  flexDir={"column"}
                  justifyItems={"center"}
                  href="/pricing"
                  alignItems={"center"}
                  _hover={{
                    color: "primary",
                    fontWeight: 600,
                    "& .link-circle": { display: "block" },
                  }}
                >
                  Pricing
                  <div className="link-circle" />
                </Link>{" "}
              </Box>
            </Flex>
            <Box>
              <Flex gap={5} justifyContent={"flex-end"} fontWeight={"600"}>
                <IconButton
                  icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
                  size={"md"}
                  isRound={true}
                  onClick={toggleColorMode}
                />
                <Link href="/api/auth/login">
                  <Button
                    display={{ base: "none", md: "block" }}
                    bg={"primary"}
                    borderRadius={"50px"}
                    px={5}
                    _hover={{ bg: "primary" }}
                    size={"md"}
                    color={"white"}
                  >
                    Sign Up / Sign In
                  </Button>
                </Link>

                {/* Hamburger Icon for Mobile */}
                <Box display={{ base: "block", md: "none" }}>
                  <IconButton
                    icon={<FaBars />}
                    size={"md"}
                    isRound={true}
                    onClick={handleDrawerToggle}
                  />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Drawer for Mobile */}
      <Drawer isOpen={isOpen} placement="right" onClose={handleDrawerToggle}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack
              spacing={10}
              align="center"
              width={"100%"}
              display={"flex"}
              marginY={"20%"}
            >
              <Link href="#" _hover={{ fontWeight: 600, color: "primary" }}>
                Home
              </Link>
              <Link href="#" _hover={{ fontWeight: 600, color: "primary" }}>
                Services
              </Link>
              <Link href="#" _hover={{ fontWeight: 600, color: "primary" }}>
                About
              </Link>
              <Link href="#" _hover={{ fontWeight: 600, color: "primary" }}>
                Pricing
              </Link>
              {/* Login and Signup Buttons */}
              <Button
                width={"100%"}
                size={"md"}
                px={5}
                border={`2px solid`}
                borderColor={"primary"}
                color={"primary"}
                bg={background}
              >
                Sign Up / Sign In
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavBar;
