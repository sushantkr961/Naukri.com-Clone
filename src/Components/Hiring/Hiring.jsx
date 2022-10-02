import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import Carousel from '@itseasy21/react-elastic-carousel';
import Card from '../Hiring/Card';

const Hiring = () => {

    const card = {
        // border: '1px solid red',
        width: '95%',
        // height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
      }
    
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
        Featured companies actively hiring</Text>
      <div style={card}>
            <Carousel breakPoints={breakpoints}>
            <Card src='https://img.naukimg.com/logo_images/groups/v2/44512.gif' 
            word='ICICI Bank' 
            rating='4.0' 
            review='34.1K+' 
            capt='Leading private sector bank in India.'
            />
            <Card src='https://img.naukimg.com/logo_images/groups/v2/126896.gif' 
            word='Bharti Airtel' 
            rating='4.1' 
            review='12.7K+' 
            capt='Leading global telecom company.'
            />
            <Card src='https://img.naukimg.com/logo_images/groups/v2/1574056.gif' 
            word='Applied Materials' 
            rating='4.2' 
            review='203' 
            capt='Leader in materials engineering solutions.'
            />
            <Card src='https://img.naukimg.com/logo_images/groups/v2/240936.gif' 
            word='JPMorgan Chase Bank' 
            rating='4.2' 
            review='3.5K' 
            capt='Leader in financial services.'
            />
            <Card src='https://img.naukimg.com/logo_images/groups/v2/2436002.gif' 
            word='Xoriant' 
            rating='4.3' 
            review='959' 
            capt='Software development & technology services firm.'
            />
            <Card src='https://img.naukimg.com/logo_images/groups/v2/42932.gif' 
            word='Genpact' 
            rating='4.0' 
            review='26.1K+' 
            capt='Global professional services firm.'
            />
            <Card src='https://img.naukimg.com/logo_images/groups/v2/398058.gif' 
            word='Amazon' 
            rating='4.3' 
            review='17.4K+' 
            capt='Worlds largest internet company.'
            />
            <Card src='https://img.naukimg.com/logo_images/groups/v2/21746.gif' 
            word='FIS' 
            rating='4.1' 
            review='3.5K+' 
            capt='FIS is hiring 3 to 10yrs exp. in C++'
            />
            <Card src='https://img.naukimg.com/logo_images/groups/v2/13832.gif' 
            word='Infosys' 
            rating='3.9' 
            review='27.5K+' 
            capt='Global leader in next-gen digital services.'
            />
            <Card src='https://img.naukimg.com/logo_images/groups/v2/1288.gif' 
            word='Capgemini' 
            rating='3.9' 
            review='23.4K+' 
            capt='Global leader in technology services.'
            />
            </Carousel>
      </div>
      <Box mt='10px' display='flex' justifyContent='center'>
      <Button borderRadius='20px' color='#457EFF' padding='15px 30px' border='1px solid #457EFF' backgroundColor='#FFFFFF' fontSize='17px'>View all companies</Button>
      </Box>
    </>
  )
}

export default Hiring