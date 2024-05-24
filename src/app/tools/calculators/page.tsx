"use client";

import {
  Container,
  Flex,
  Heading,
  Input,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Calculator = () => {
  const [na, setNa] = useState(0);
  const [cl, setCl] = useState(0);
  const [hco3, setHco3] = useState(0);

  const [result, setResult] = useState(0);

  useEffect(() => {
    const formula = na - (cl + hco3);
    setResult(formula);
  }, [na, cl, hco3]);

  return (
    <VStack textAlign={"center"} pt={20} gap={4}>
      <Heading textColor={"primary"}>Anion Gap</Heading>
      <VStack bg={"#D7E6F9"} rounded={10} mt={16} gap={10} p={30}>
        <Heading>Input</Heading>
        <Flex gap={30} alignItems={"center"}>
          <VStack gap={"63px"}>
            <Text>Na</Text>
            <Text>Cl</Text>
            <Text>HCO3</Text>
          </VStack>
          <VStack gap={10}>
            <Input
              type="number"
              bg={"white"}
              value={na}
              onChange={(e) => setNa((prevNa) => parseFloat(e.target.value))}
            />
            <Input
              type="number"
              bg={"white"}
              value={cl}
              onChange={(e) => setCl((prevCl) => parseFloat(e.target.value))}
            />
            <Input
              type="number"
              bg={"white"}
              value={hco3}
              onChange={(e) =>
                setHco3((prevHco3) => parseFloat(e.target.value))
              }
            />
          </VStack>
          <VStack gap={10}>
            <Input type="text" bg={"white"} value={"mEq/L"} />
            <Input type="text" bg={"white"} value={"mEq/L"} />
            <Input type="text" bg={"white"} value={"mEq/L"} />
          </VStack>
        </Flex>

        <Flex gap={30} alignItems={"center"}>
          <Heading size={"sm"}>Result</Heading>
          <Input type="number" bg={"white"} disabled={true} value={result} />
          <Input type="text" bg={"white"} value={"mEq/L"} />
        </Flex>
      </VStack>
    </VStack>
  );
};

export default Calculator;
