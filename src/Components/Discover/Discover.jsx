import { Box, Flex, Img, Text  } from '@chakra-ui/react';
import React from 'react';
import DiscoverCard from './DiscoverCard';

const Discover = () => {
  return (
    <>
        <Flex w='90%' margin='auto' mt='75px' h='500px' align='center' >
            <Box h='450px'
            // border='1px solid red' 
            borderLeftRadius='50px' 
            bg='#fef9f4' w='420px' 
            pl='107px' pt='57px' >
                <Img src='https://static.naukimg.com/s/0/0/i/role-collection.png'/>
                <Text w='275px' fontWeight='bold' 
                fontSize='27px' lineHeight='40px' >
                    Discover jobs across popular roles</Text>
                <Text w='251px' fontSize='17px' lineHeight='26px' 
                color='#8292b4' mt='10px'>
                    Select a role and we'll show you relevant jobs for it!</Text>
            </Box>

            <Flex>
                <Box h='500px'  w='550px'
                // border='1px solid green'
                pl='47px' pt='50px' borderTopLeftRadius='25px' borderBottomRightRadius='25px' borderTopRightRadius='15px' borderBottomLeftRadius='15px' >
                    <Flex>
                        <Box>
                            <DiscoverCard post='Full Stack Developer' jobs='23.9K+ Jobs' />
                            <DiscoverCard post='Front End Developer' jobs='3.2K+ Jobs' />
                            <DiscoverCard post='Engineering Manager' jobs='1.1K+ Jobs' />
                            <DiscoverCard post='Mobile/App Developer' jobs='2.7K+ Jobs' />
                        </Box>
                        <Box>
                            <DiscoverCard post='Cyber Security' jobs='400+ Jobs' />
                            <DiscoverCard post='Technical Architect' jobs='8.3K+ Jobs' />
                            <DiscoverCard post='Data Scientist' jobs='760 Jobs' />
                            <DiscoverCard post='Program Manager' jobs='788 Jobs' />
                        </Box>
                    </Flex>
                </Box>
            </Flex>
            
        </Flex>
    </>
  );
};

export default Discover;