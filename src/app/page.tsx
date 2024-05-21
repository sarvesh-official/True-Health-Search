"use client";

import { HStack, VStack } from "@chakra-ui/react";
import React from "react";
import Hero from "../components/sections/landingpage/Hero";
import WeOffer from "../components/sections/landingpage/WeOffer";
import About from "../components/sections/landingpage/About";
import FAQSection from "../components/sections/landingpage/FAQ";
import Footer from "../components/sections/landingpage/Footer";
import NavBar from "../components/NavBar";

function LandingPage() {
  return (
    <>
      <NavBar />
      <VStack>
        <Hero />
        <WeOffer />
        <About />
        <FAQSection />
        <Footer />
      </VStack>
    </>
  );
}

export default LandingPage;
