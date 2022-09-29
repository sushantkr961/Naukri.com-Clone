import React from 'react'
import { SimpleGrid, Box, Icon} from '@chakra-ui/react';
import { ChevronRightIcon } from "@chakra-ui/icons";

const Grid = () => {

    
    
  return (
    <>
    <SimpleGrid
    columns={{ sm: 1, md: 6 }}
    spacing='8'
    p='10'
    textAlign='center'
    rounded='lg'
    color='black'
    >
    <Box width='180px' boxShadow='lg'p='6'rounded='md'bg='white' borderRadius='16px 6px' border='1px solid #EAF1F5'>
        Remote <Icon as={ChevronRightIcon} />
    </Box>
    <Box width='180px' boxShadow='lg'p='6'rounded='md'bg='white' borderRadius='16px 6px' border='1px solid #EAF1F5'>
        MNC <Icon as={ChevronRightIcon} />
    </Box>
    <Box width='180px' boxShadow='lg'p='6'rounded='md'bg='white' borderRadius='16px 6px' border='1px solid #EAF1F5'>
        Banking <Icon as={ChevronRightIcon} />
    </Box>
    <Box width='180px' boxShadow='lg'p='6'rounded='md'bg='white' borderRadius='16px 6px' border='1px solid #EAF1F5'>
        Sales <Icon as={ChevronRightIcon} />
    </Box>
    <Box width='180px' boxShadow='lg'p='6'rounded='md'bg='white' borderRadius='16px 6px'  border='1px solid #EAF1F5'>
        Project Mgt <Icon as={ChevronRightIcon} />
    </Box>
    <Box width='180px' boxShadow='lg'p='6'rounded='md'bg='white' borderRadius='16px 6px' border='1px solid #EAF1F5'>
        Fortune 500 <Icon as={ChevronRightIcon} />
    </Box>
    </SimpleGrid>
    <SimpleGrid
    columns={{ sm: 1, md: 5 }}
    spacing='5'
    // border='1px solid'
    width='85%'
    margin='auto'
    textAlign='center'
    rounded='lg'
    color='black'
    >
    <Box width='180px' boxShadow='lg'p='6'rounded='md'bg='white' borderRadius='16px 6px' border='1px solid #EAF1F5' >
        Data Scientist <Icon as={ChevronRightIcon} />
    </Box>
    <Box width='180px' boxShadow='lg'p='6'rounded='md'bg='white' borderRadius='16px 6px' border='1px solid #EAF1F5'>
        Temp WFH <Icon as={ChevronRightIcon} />
    </Box>
    <Box width='180px' boxShadow='lg'p='6'rounded='md'bg='white' borderRadius='16px 6px' border='1px solid #EAF1F5'>
        Startup <Icon as={ChevronRightIcon} />
    </Box>
    <Box width='180px' boxShadow='lg'p='6'rounded='md'bg='white' borderRadius='16px 6px' border='1px solid #EAF1F5' >
        Software & IT <Icon as={ChevronRightIcon} />
    </Box>
    <Box width='180px' boxShadow='lg'p='6'rounded='md'bg='white' borderRadius='16px 6px' border='1px solid #EAF1F5'>
        Fresher <Icon as={ChevronRightIcon} />
    </Box>
    </SimpleGrid>
    </>
  )
}

export default Grid;