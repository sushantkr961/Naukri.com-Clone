import { Box, Flex, Text, Input, Select, InputGroup, InputLeftElement, Button, InputRightElement } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const DreamJob = () => {
  return (
    <Box paddingTop='70px'>
        <Box>
            <Text textAlign='center' fontSize='35px' marginBottom='10px' fontFamily='Roboto Slab' fontWeight='extrabold'>Find your dream job now </Text>
        </Box>
        <Text textAlign='center' color='#8292B4' marginBottom='30px' >5 lakh+ jobs for you to explore</Text>
        <Flex 
        border='1px solid #EAF1F5' padding='15px' borderRadius='35px'
        boxShadow='lg' bg='white' width='78%' margin='auto' marginBottom='40px'
        >
            <InputGroup  w='400px'>
            <InputLeftElement 
            children={<Search2Icon color='gray.400' fontSize='1.2em'/>}/>
            <Input type='text' borderRadius='none' focusBorderColor='none' placeholder='Enter skills / designations / companies' border='none' fontSize='18px' borderRight='1px solid #EAF1F5'></Input>
            </InputGroup>
            <Select focusBorderColor='none' placeholder='Select experience' color='gray.500' w='200px' border='none' fontSize='17px' borderRight='1px solid #EAF1F5' borderRadius='none'>
                <option>Fresher</option>
                <option>1 year</option>
                <option>2 years</option>
                <option>3 years</option>
                <option>4 years</option>
                <option>5 years</option>
                <option>6 years</option>
                <option>7 years</option>
                <option>8 years</option>
                <option>9 years</option>
                <option>10 years</option>
            </Select>
            <Box>
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type='text'
                fontSize='17px'
                placeholder='Enter location'
                border='none' focusBorderColor='none'
              />
              <InputRightElement >
                <Button padding='25px 70px' borderRadius='25px' color='white' fontSize='19px' bg='#457EFF'><Link to='/jobs'>Search</Link>
                </Button>
              </InputRightElement>
            </InputGroup>
            </Box>
        </Flex>
    </Box>
  );
};


export default DreamJob