import React from 'react';
import { Img, Text, Flex, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const Card = ({ src, word, rating, review, capt, kachi }) => {

    
  return (
    <Link to='/jobs'>
    <Box width='230px' boxShadow='lg' 
    p='5'rounded='md' bg='white' 
    borderRadius='16px 6px' 
    border='1px solid #EAF1F5' 
    color='#1B2437' fontWeight='600' 
    fontSize='17px' mb='10px'>
        <Img border='1px solid #EAF1F5' src={src}  h='60px' w='60px' margin='auto' />
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
        <Text color='#8292B4' border='1px solid #EAF1F5' borderRadius='15px' fontSize='13px' mt='15px' mb='5px'  textAlign='center'>{capt}</Text>
        <Text border='1px solid #EAF1F5' borderRadius='15px' color='#8292B4' fontSize='13px' textAlign='center'>{kachi}</Text>
    </Box>
    </Link>
  );
};

export default Card;

// #B02A3008