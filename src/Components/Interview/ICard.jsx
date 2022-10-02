import React from 'react';
import { Img, Text, Flex, Box, Icon } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const ICard = ({src, word, int}) => {
  return (
    <Link to='/jobs'>
    <Flex width='230px' 
    p='5'rounded='md' bg='white' 
    borderRadius='16px 6px' 
    border='1px solid #EAF1F5' 
    color='#1B2437' fontWeight='600' 
    fontSize='17px' mb='10px'>
        <Img w='50px' h='50px' src={src} />
        <Box>
        <Text ml='10px'>{word}<Icon as={ChevronRightIcon} /></Text>
        <Text ml='10px' mt='2px' fontSize='13px' color='#8292b4'>{int}</Text>
        </Box>
    </Flex>
    </Link>
  )
}

export default ICard;