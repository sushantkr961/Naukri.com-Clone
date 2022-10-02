import React from 'react';
import { Img, Text, Flex, Box, Icon } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const JobsCard = ({name, word, tags, local, type}) => {
  return (

    <Flex width='99%px' h='180px' boxShadow='lg'
    p='5'rounded='md' bg='white' 
    borderRadius='16px 6px' 
    border='1px solid #EAF1F5' 
    color='#1B2437' fontWeight='600' 
    fontSize='17px' mb='10px'>
      <Img border='1px solid #EAF1F5' mr='10px' w='60px' h='60px' src="https://th.bing.com/th/id/OIP.eM0QgvXkAMn5Oz8hS6sm9QHaHa?w=169&h=180&c=7&r=0&o=5&dpr=1.06&pid=1.7" />
        <Box>
        <Text ml='10px'  overflow='hidden' h='30px'>{word}
        <Icon fontSize='20px' color='#3182CE' as={ChevronRightIcon} />
        </Text>
        <Text ml='10px' mt='2px' fontSize='15px' color='#8292b4' ><u>Company:</u> {name}</Text>
        <Text ml='10px' mt='2px' fontSize='15px' color='#8292b4'><u>Job Tags:</u> {tags}</Text>
        <Text ml='10px' mt='2px' fontSize='15px' color='#8292b4'><u>Location: </u>{local}</Text>
        <Text ml='10px' mt='2px' fontSize='15px' color='#8292b4'><u>Job Type: </u>{type}</Text>
        </Box>
        
    </Flex>
  )
}

export default JobsCard;