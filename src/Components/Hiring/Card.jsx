import React from 'react';
import { Img, Text, Flex, Box, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Card = ({ src, word, rating, review, capt }) => {

    
  return (
    <Link to='/jobs'>
    <Box width='230px' boxShadow='lg' 
    p='5'rounded='md' bg='white' 
    borderRadius='16px 6px' 
    border='1px solid #EAF1F5' 
    color='#1B2437' fontWeight='600' 
    fontSize='17px'>
        <Img src={src} margin='auto' />
        <Box  borderRadius='16px 6px' bg='#F1F5FF' p='3' 
        mt='10px' >
        <Text fontSize='17px' 
          color='#1B2437' textAlign='center'>{word}</Text>
        <Flex>
            <Img src='https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.625a2323.svg'/>
            <Text color='#8292B4' fontSize='13px' mr='25px' ml='5px' >{rating}</Text> 
            <Text color='#8292B4' fontSize='13px' >{review} reviews</Text>
        </Flex>
        </Box>
        <Text color='#8292B4' fontSize='13px' p='1' mt='15px' mb='10px' textAlign='center'>{capt}</Text>
        <Link to='/jobs'>
        <Button color='#457EFF' fontSize='15px' p='11px 20px' borderRadius='27px' bg='#F1F5FF' ml='40px' >View jobs</Button>
        </Link>
    </Box>
    </Link>
  );
};

export default Card;

// #B02A3008