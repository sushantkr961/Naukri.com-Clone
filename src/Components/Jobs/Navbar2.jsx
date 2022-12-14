import React from "react";
import {
  Flex,
  Box,
  Button,
  Img,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
// import LoginDraw from '../Drawer/LoginDraw';
// import RegisterDraw from '../Drawer/RegisterDraw';

const Navbar2 = () => {
  const jcs = { backgroundColor: "#FFFFFF" };

  return (
    <Flex
      align="center"
      width="100%"
      gap="2"
      height="75px"
      padding="10px"
      //   border='1px solid #8292B4'
      margin="auto"
      justify="space-evenly"
    >
      <Box mr="30px">
        <Link to="/">
          <Img
            src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png"
            alt="logo"
          />
        </Link>
      </Box>

      {/* <Spacer /> */}

      <Box
        // border='1px solid'
        ml="-10px"
        width="350px"
        // display='flex'
        justifyContent="space-between"
      >
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style={jcs}>
            {" "}
            <Link to="/"> Jobs </Link>
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link to="/jobs">Popular Jobs</Link>{" "}
            </MenuItem>
            <MenuItem>
              <Link to="/jobs">Jobs in demand</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/jobs">Job by Location</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/jobs">Explore More Jobs</Link>
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style={jcs}>
            <Link to="jobs"></Link>Companies
          </MenuButton>

          <MenuList flexDirection="column">
            <MenuItem>
              <Link to="/jobs">Explore categories</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/jobs">Explore collections</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/jobs">Research companies</Link>
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style={jcs}>
            Services
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link to="/jobs">Research companies</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/jobs">Learn & upskill</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/jobs">Free resume resources</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/jobs">Monthly subscriptions</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/jobs">Find Jobs</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      {/* <Input w='260px' type='search' placeholder='Search Jobs' borderRadius='25px' /> */}
      <Stack spacing={4}>
        <InputGroup>
          <InputRightElement
            borderRadius="50%"
            backgroundColor="#457EFF"
            pointerEvents="none"
            children={<Search2Icon color="#FFFFFF" />}
          />
          <Input
            type="search"
            placeholder="Search jobs here"
            borderRadius="25px"
          />
        </InputGroup>
      </Stack>

      {/* <Box>
            <ButtonGroup gap='2'>
                <LoginDraw/>
                <RegisterDraw/>
            </ButtonGroup>
        </Box> */}
      <Link to="/login">
        <Button
          fontSize="20px"
          borderRadius="20px"
          color="#457EFF"
          padding="10px 20px"
          border="1px solid #457EFF"
          backgroundColor="#FFFFFF"
          _hover={{ backgroundColor: "#457EFF", color: "#FFFFFF" }}
        >
          Login
        </Button>
      </Link>
      <Box>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            borderLeft="1px solid #EAF1F5"
            borderRadius="0"
            backgroundColor="#FFFFFF"
          >
            {" "}
            For employers
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link to="/jobs">Buy online</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/jobs">Hiring solutions</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/jobs">Employer Login</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar2;
