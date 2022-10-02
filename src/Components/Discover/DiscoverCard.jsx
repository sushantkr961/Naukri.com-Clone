import { Box, Icon, Text } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const DiscoverCard = ({post, jobs}) => {
  return (
    <Link to='/jobs'>
    <Box m='2' >
        <Box w='250px' boxShadow='lg'p='6'rounded='md'bg='white' borderRadius='16px 6px' border='1px solid #EAF1F5' color='#1B2437' fontSize='17px' fontWeight='600'>
        {post} <Text fontSize='13px' color='#8292B4'>{jobs} <Icon color='black' fontSize='13px' as={ChevronRightIcon} /></Text>
        </Box>
    </Box>
    </Link>
  )
}

export default DiscoverCard;