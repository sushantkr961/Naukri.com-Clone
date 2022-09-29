import React from 'react';
import { Flex, Box, ButtonGroup, Button, Img, Menu, MenuButton, MenuList, MenuItem, Spacer } from "@chakra-ui/react";
import { ChevronDownIcon } from '@chakra-ui/icons';

const Navbar = () => {
    const Button1 = {
        backgroundColor:'#ff7555', color:'#FFFFFF', padding:'10px 20px', borderRadius:'20px',
    }
    const Button2 = {
        borderRadius:'20px', color:'#457EFF', padding:'10px 20px', border:'1px solid #457EFF',backgroundColor:'#FFFFFF'
    }
    const jcs = { backgroundColor:'#FFFFFF', }
    }

    return (
    <Flex 
    align='center' 
    width='container.xl' 
    gap='2' 
    // border='1px solid red'
    margin='auto'>
        <Box mr='50px'>
            <Img src='https://static.naukimg.com/s/4/100/i/naukri_Logo.png' alt='logo'/>
        </Box>

    {/* <Spacer /> */}

        <Box 
        border='1px solid' 
        ml='50px' 
        width='400px' 
        display='flex' 
        justifyContent='space-between' >
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style={jcs} Button>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>

            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style={jcs}>Companies</MenuButton>
                    
                <MenuList flexDirection='column'>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                {/* </MenuList> */}
                {/* <MenuList> */}
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                {/* </MenuList> */}
                {/* <MenuList> */}
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>

            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style={jcs}>
                    Services
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
        </Box>

        <Spacer />

        <Box>
            <ButtonGroup gap='2'>
                <Button style={Button2} >Login</Button>
                <Button style={Button1} >Register</Button>
            </ButtonGroup>
        </Box>
        <Box>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} borderLeft='1px solid #A0AEC0' borderRadius='0' backgroundColor='#FFFFFF' > For employers
                </MenuButton>
                <MenuList>
                    <MenuItem>Buy online</MenuItem>
                    <MenuItem>Hiring solutions</MenuItem>
                    <MenuItem>Employer Login</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
    );
};

export default Navbar;