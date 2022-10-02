import React from 'react';
import { Img, Text, Icon, Flex, Box } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Card = ({ src1, src2,src3, src4, word, no }) => {

    const photu = {
        height:'40px',
        width:'40px',
        margin: '3px',
        borderRadius: '3px'
    }
    
  return (
    <Link to='/jobs'>
    <Box width='230px' boxShadow='lg'p='5'rounded='md'bg='white' borderRadius='16px 6px' border='1px solid #EAF1F5' color='#1B2437' fontWeight='600' fontSize='17px'>
        <Text>{word} <Icon color='#8292B4' fontSize='25px' as={ChevronRightIcon} /></Text>
        <Text fontSize='13px' color='#8292B4'>{no}</Text>
        <Flex>
            <Img style={photu} src={src1} />
            <Img style={photu} src={src2} />
            <Img style={photu} src={src3} />
            <Img style={photu} src={src4} />
        </Flex>
        
    </Box>
    </Link>
  );
};

export default Card;

