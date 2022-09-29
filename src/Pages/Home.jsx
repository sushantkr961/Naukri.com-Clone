import { Box } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Components/Navbar';
import DreamJob from '../Components/DreamJob';

const Home = () => {
  return (
    <Box>
        {/* <div>Home</div> */}
        <Navbar />
        <DreamJob />
    </Box>
    

  )
}

export default Home