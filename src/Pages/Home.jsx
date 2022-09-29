import { Box } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Components/Navbar';
import DreamJob from '../Components/DreamJob';
import Grid from '../Components/Grid';

const Home = () => {
  return (
    <Box>
        {/* <div>Home</div> */}
        <Navbar />
        <DreamJob />
        <Grid />
    </Box>
    

  );
};

export default Home;