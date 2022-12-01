import React from 'react';
import { Flex, Box, ButtonGroup, Button, Img, Menu, MenuButton, MenuList, MenuItem, Spacer } from "@chakra-ui/react";
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import LoginDraw from './Drawer/LoginDraw';
// import RegisterDraw from './Drawer/RegisterDraw';


const Navbar = () => {

    const { isAuth } = useSelector((store) => store.login)
    const handleAuth = () =>{}

    const jcs = { backgroundColor:'#FFFFFF'
    }

    return (
    <Flex 
    align='center' 
    width='100%' 
    gap='2' 
    height='75px'
    padding='10px'
    // borderBottom='1px solid #8292B4'
    margin='auto'>
        <Box mr='50px'>
            <Link to='/'>
            <Img src='https://static.naukimg.com/s/4/100/i/naukri_Logo.png' alt='logo'/>
            </Link>
        </Box>

    {/* <Spacer /> */}

        <Box 
        // border='1px solid' 
        ml='50px' 
        width='400px' 
        // display='flex' 
        justifyContent='space-between' >
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style={jcs}> <Link to="/"> Jobs </Link></MenuButton>
                <MenuList>
                    <MenuItem><Link to="/jobs">Popular Jobs</Link> </MenuItem>
                    <MenuItem><Link to='/jobs'>Jobs in demand</Link></MenuItem>
                    <MenuItem><Link to='/jobs'>Job by Location</Link></MenuItem>
                    <MenuItem><Link to='/jobs'>Explore More Jobs</Link></MenuItem>
                </MenuList>
            </Menu>

            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style={jcs}><Link to='jobs'></Link>Companies</MenuButton>
                    
                <MenuList flexDirection='column'>
                    <MenuItem><Link to='/jobs'>Explore categories</Link></MenuItem>
                    <MenuItem><Link to='/jobs'>Explore collections</Link></MenuItem>
                    <MenuItem><Link to='/jobs'>Research companies</Link></MenuItem>
                    
                
                </MenuList>
            </Menu>

            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style={jcs}>
                    Services
                </MenuButton>
                <MenuList>
                    <MenuItem><Link to='/jobs'>Research companies</Link></MenuItem>
                    <MenuItem><Link to='/jobs'>Learn & upskill</Link></MenuItem>
                    <MenuItem><Link to='/jobs'>Free resume resources
                    </Link></MenuItem>
                    <MenuItem><Link to='/jobs'>Monthly subscriptions</Link></MenuItem>
                    <MenuItem><Link to='/jobs'>Find Jobs</Link></MenuItem>
                </MenuList>
            </Menu>
        </Box>

        <Spacer />

        <Box>
            <ButtonGroup gap='2'>
                {/* <LoginDraw />
                <RegisterDraw /> */}
                <Link to='/login'>
                <Button fontSize='20px' borderRadius='20px' color='#457EFF' padding='10px 20px' border='1px solid #457EFF' backgroundColor='#FFFFFF' _hover={{backgroundColor: "#457EFF", color: '#FFFFFF'}}  onClick={handleAuth}>{isAuth ? "Logout":"Login"}</Button>
                </Link>
                
            </ButtonGroup>
        </Box>
        <Box>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} borderLeft='1px solid #EAF1F5' borderRadius='0' backgroundColor='#FFFFFF'  ><Link to='/jobs'>For employers</Link> 
                </MenuButton>
                <MenuList>
                    <MenuItem><Link to='/jobs'>Buy online</Link></MenuItem>
                    <MenuItem><Link>Hiring solutions</Link></MenuItem>
                    <MenuItem><Link to='/jobs'>Employer Login</Link></MenuItem>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
    );
};

export default Navbar;