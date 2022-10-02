import React from 'react'
import Card from './Card';
import Carousel from '@itseasy21/react-elastic-carousel'
import { Text, Box, Button } from '@chakra-ui/react';

const Sponsored = () => {

  const card = {
    // border: '1px solid red',
    width: '95%',
    // height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
  }
  // const styles = {
  //   border: '1px solid #D3E1EA',
  //   margin: '20px',
  //   textAlign: 'center',
    
  // }

    const breakpoints = [
        { width: 1, itemsToShow: 2},
        { width: 500, itemsToShow: 3},
        { width: 900, itemsToShow: 4},
    ];

  return (
    <>
    <Text textAlign='center' fontSize='27px' 
      fontWeight='bold' fontFamily='sans-serif' 
      color='black' marginTop='80px' marginBottom='40px' >
        Sponsored companies</Text>
        {/* <Flex border='1px solid' w='80%' margin='auto'>
          <Text style={styles}>All</Text>
          <Text style={styles}>IT Services</Text>
          <Text style={styles}>Technology</Text>
          <Text style={styles}>Manufacturing & Production</Text>
          <Text style={styles}>BFSI</Text>
          <Text style={styles}>Healthcare & Life Sciences</Text>
          <Text style={styles}>Infrastructure, Transport & Real Estate</Text>
          <Text style={styles}>Consumer, Retail & Hospitality</Text>
          <Text style={styles}>BPM</Text>
        </Flex> */}
      <div style={card}>
            <Carousel breakPoints={breakpoints}>
            <Box>
            <Card src='https://img.naukimg.com/logo_images/groups/v1/1699912.gif' 
            word='SS&C' 
            rating='3.7' 
            review='834' 
            capt='Internet Foriegn MNC'
            kachi='FinTech/ Payments'
            />
            <Card src='https://img.naukimg.com/logo_images/groups/v1/4665485.gif' 
            word='Sungard Availability' 
            rating='4.1' 
            review='157'
            capt='B2B Foreign MNC'
            kachi='Software Product'
            />
            </Box>
            <Box>
            <Card src='https://img.naukimg.com/logo_images/groups/v1/3923332.gif' 
            word='Chubb' 
            rating='4.0' 
            review='49' 
            capt='Insurance Foreign MNC'
            kachi='Forbes Global 2000'
            />
            <Card src='https://img.naukimg.com/logo_images/groups/v1/4622367.gif' 
            word='Rain Industries' 
            rating='4.2' 
            review='53' 
            capt='B2B Public'
            kachi='Corporate Chemicals'
            />
            </Box>
            <Box>
            <Card src='https://img.naukimg.com/logo_images/groups/v1/1367094.gif' 
            word='CCS Technologies' 
            rating='3.9' 
            review='44' 
            capt='B2B Private service'
            kachi='Corporate'
            />
            <Card src='https://img.naukimg.com/logo_images/groups/v1/1246016.gif' 
            word='Hindustan Powerplant' 
            rating='3.8' 
            review='32' 
            capt='Power B2B'
            kachi='Indian MNC'
            />
            </Box>
            <Box>
            <Card src='https://img.naukimg.com/logo_images/groups/v1/2082772.gif' 
            word='Software AG' 
            rating='4.3' 
            review='104' 
            capt='Foreign MNC'
            kachi='Emerging Technologies'
            />
            <Card src='https://img.naukimg.com/logo_images/groups/v1/6240065.gif' 
            word='The Enerji Group' 
            rating='4.9' 
            review='4' 
            capt='Private B2B'
            kachi='IT services & Consulting'
            />
            </Box>
            <Box>
            <Card src='https://img.naukimg.com/logo_images/groups/v1/2069076.gif' 
            word='Jade Global' 
            rating='4.3' 
            review='122' 
            capt='IT Services & Consulting'
            kachi='Foreign MNC Service'
            />
            <Card src='https://img.naukimg.com/logo_images/groups/v1/4611495.gif' 
            word='Mavenir' 
            rating='3.9' 
            review='204' 
            capt='B2B Private'
            kachi='Internet Telecom/ISP'
            />
            </Box>
            <Box>
            <Card src='https://img.naukimg.com/logo_images/groups/v1/49980.gif' 
            word='Encora' 
            rating='4.1' 
            review='152' 
            capt='B2B Private Service'
            kachi='Foreign MNC'
            />
            <Card src='https://img.naukimg.com/logo_images/groups/v1/4583813.gif' 
            word='Bentley System' 
            rating='4.1' 
            review='832' 
            capt='IT Services & Consulting'
            kachi='Software Product'
            />
            </Box>
            </Carousel>
      </div>
      <Box mt='10px' display='flex' justifyContent='center'>
      <Button borderRadius='20px' color='#457EFF' padding='15px 30px' border='1px solid #457EFF' backgroundColor='#FFFFFF' fontSize='17px'>View all companies</Button>
      </Box>
    </>
  )
}

export default Sponsored;

