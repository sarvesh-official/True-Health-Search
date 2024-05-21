import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  VStack,
  
  Text,
  Flex,
  FormControl,
} from "@chakra-ui/react";

import { Send } from "@mui/icons-material";
export default function ChatInterface() {
  const [inputValue, setInputValue] = useState("");
  

  return (
    <VStack>
      <Flex border="1px solid #ccc" borderRadius="md" p="4" mb={"30px"} >

        <FormControl display={"flex"} gap={"10px"} >
        <Input
        w={"700px"}
          placeholder="Type a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button colorScheme="blue">
          <Send/>
        </Button>
        </FormControl>

        
      </Flex>
    </VStack>
  );
}


