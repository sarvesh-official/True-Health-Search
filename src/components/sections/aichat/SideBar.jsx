import React, { useState } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading,
    Button
} from '@chakra-ui/react'

import {
    FiMenu,

} from 'react-icons/fi'
import { BellIcon, ChatIcon, PlusSquareIcon, SunIcon } from '@chakra-ui/icons'
import NavItem from './NavItem'
import { FaSun } from 'react-icons/fa';

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            pos="sticky"
            h="100%"
            bg={"#0D2B46"}
            color={"white"}
            marginTop={navSize == "large" ? "" : "5vh"}
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            // borderRadius={navSize == "small" ? "15px" : "30px"}
            w={navSize == "small" ? "75px" : "300px"}
            flexDir="column"
            justifyContent="space-between"
        >
              <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
            >
                <IconButton
                    background="none"
                    mt={5}
                    color={"white"}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                <Divider display={navSize == "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
            <Avatar size="sm" src="avatar-1.jpg" />
            <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                <Heading as="h3" size="xs">True Health Search</Heading>
                <Text color="gray">Admin</Text>
            </Flex>
        </Flex>
          
                <NavItem navSize={navSize} icon={ChatIcon} title="Question 1" description="This is the description for the dashboard." />
                <NavItem navSize={navSize} icon={ChatIcon} title="Question 2" active />
                <NavItem navSize={navSize} icon={ChatIcon} title="Question 3" />
                <NavItem navSize={navSize} icon={ChatIcon} title="Question 4" />
                
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                gap={3}
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={2}
            >
                <Button w={"100%"} bg={"primary"} color={"white"}><AddBoxIcon/>{"‎ ‎  "}<Text display={navSize == "small" ? "none" : "flex"}>Start a new chat</Text></Button>
                <Button w={"100%"} bg={"#D21111"} color={"white"}><DeleteOutlineIcon/>{"‎  ‎ "}<Text display={navSize == "small" ? "none" : "flex"}>Clear History</Text></Button>
            </Flex>
            <Flex flexDirection={"column"}  p="5%"
                flexDir="column"
                w="100%"
                gap={"3px"}
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}>

            <Button w={"100%"}  color={"white"} bg={""} display={"flex"} justifyContent={"left"}><WbSunnyIcon/>{"‎ ‎  "}<Text display={navSize == "small" ? "none" : "flex"}>Switch Light Mode</Text></Button>
            <Button w={"100%"}  color={"white"} bg={""}display={"flex"} justifyContent={"left"}><OpenInNewIcon/>{"‎ ‎  "} <Text display={navSize == "small" ? "none" : "flex"}>Home</Text></Button>
                <Button w={"100%"} color={"red"} bg={""}display={"flex"} justifyContent={"left"}><PowerSettingsNewIcon/>{"‎  ‎ "}<Text display={navSize == "small" ? "none" : "flex"}>Log Out</Text></Button>
            </Flex>
        </Flex>
    )
}