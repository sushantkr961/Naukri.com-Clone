import { Box, Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';
import ICard from './ICard';

const Interview = () => {
  return (
    <>
    <Flex h='430px' p='2' mt='50px' >
        <Box w='20%' m='10px' pt='50px' >
        <Text 
        textAlign='center' 
        fontSize='27px' 
        fontWeight='700' 
        fontFamily='sans-serif' 
        color='black'
        mb='10px'
        >
        Prepare for your next interview</Text>
        <Img src='https://static.naukimg.com/s/0/0/i/ab-interview.png' />
        </Box>

        <Box 
        boxShadow='lg'
        p='5'
        m='10px' 
        rounded='md'
        bg='white' 
        borderRadius='16px 6px' 
        border='1px solid #EAF1F5'
        >
        <Text 
        textAlign='center' 
        fontSize='27px' 
        fontWeight='500' 
        color='black'
        mb='15px'
        >
        Interview questions by company</Text>
          <Flex>
            <Box mr='10px'>
              <ICard src='https://static.naukimg.com/s/0/0/i/ambitionbox-comp/cognizant.png' word='Cognizant' int='1.6K+ Interviews' />
              <ICard src='https://static.naukimg.com/s/0/0/i/ambitionbox-comp/byjus.png' word='Byjus' int='816 Interviews' />
              <ICard src='https://static.naukimg.com/s/0/0/i/ambitionbox-comp/amazon.png' word='Amazon' int='1.7K+ Interviews' />
            </Box>
            <Box>
              <ICard src='https://static.naukimg.com/s/0/0/i/ambitionbox-comp/accenture.png' word='Accenture' int='2K+ Interviews' />
              <ICard src='https://static.naukimg.com/s/0/0/i/ambitionbox-comp/tcs.png' word='TCS' int='2.5K+ Interviews' />
              <ICard src='https://static.naukimg.com/s/0/0/i/ambitionbox-comp/flipkart.png' word='Flipkart' int='488 Interviews' />
            </Box>
          </Flex>
        </Box>

        <Box 
        boxShadow='lg'
        p='5'
        m='10px' 
        rounded='md'
        bg='white' 
        borderRadius='16px 6px' 
        border='1px solid #EAF1F5'>
        <Text 
        textAlign='center' 
        fontSize='27px' 
        fontWeight='500' 
        color='black' 
        mb='30px'
        >
        Interview questions by role</Text>
        <Text mt='10px' mb='10px' fontSize='17px' fontWeight='500'>Software Engineer <i> (7.2K+ questions)</i></Text>
        <hr />
        <Text mt='10px' mb='10px' fontSize='17px' fontWeight='500'>Business Analyst <i> (2.8K+ questions)</i></Text>
        <hr />
        <Text mt='10px' mb='10px' fontSize='17px' fontWeight='500'>Consultant <i> (2.4K+ questions)</i></Text>
        <hr />
        <Text mt='10px' mb='10px' fontSize='17px' fontWeight='500'>Financial Analyst <i> (894 questions)</i></Text>
        <hr />
        <Text mt='10px' mb='10px' fontSize='17px' fontWeight='500'>Sales & Marketing <i> (991 questions)</i></Text>
        <hr />
        <Text mt='10px' mb='10px' fontSize='17px' fontWeight='500'>Quality Engineer <i> (1.3K+ questions)</i></Text>
        </Box>
    </Flex>
    
    </>
  )
}

export default Interview;